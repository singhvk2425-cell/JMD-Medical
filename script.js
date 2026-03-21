// 1. FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyDYyaP7nkUk59s9nOPuZ08K5yEtcifLHCc",
  authDomain: "jmd-medical-88d46.firebaseapp.com",
  projectId: "jmd-medical-88d46",
  storageBucket: "jmd-medical-88d46.appspot.com",
  messagingSenderId: "801550606379",
  appId: "1:801550606379:web:edc86823747d21d8554a6e",
  measurementId: "G-ZM4TPEG5HV",
  databaseURL: "https://jmd-medical-88d46-default-rtdb.firebaseio.com"
};

// Initialize
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

// 2. ADMIN SETTINGS
const myWhatsAppNumber = "9110116102"; 
const adminID = "vishal123";      
const adminPass = "jmd123";       

// 3. MASTER DATA (Initial medicines for Reset)
const initialMedicines = [
    { "name": "10 ML", "qty": 339.0, "mrp": 14.0, "exp": "01/05/26", "batch": "541100621" },
    { "name": "3ML", "qty": 205.0, "mrp": 5.0, "exp": "01/10/26", "batch": "GDF542" },
    { "name": "SALTUM -DS", "qty": 30.0, "mrp": 645.88, "exp": "30/04/27", "batch": "TSMB5007" },
    { "name": "ZONAMAX ES 1.5gm", "qty": 20.0, "mrp": 275.62, "exp": "31/10/27", "batch": "18254517A" },
    { "name": "ACILOC 150TAB", "qty": 15.01, "mrp": 49.1, "exp": "31/10/26", "batch": "LD24242" },
    { "name": "DOLO 250 SYP", "qty": 1.0, "mrp": 45.02, "exp": "31/10/27", "batch": "DOTL1296" }
    // Note: Baki medicines aap Excel se array mein jod sakte hain
];

let medicines = [];
let cart = [];
let isShowingAll = false;

// --- LIVE DATABASE SYNC ---
db.ref('inventory').on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
        medicines = data;
        displayMeds(medicines);
    } else {
        // First time setup
        db.ref('inventory').set(initialMedicines);
    }
});

// --- DISPLAY LOGIC ---
function displayMeds(data) {
    const medList = document.getElementById("medList");
    const showMoreBtn = document.getElementById("showMoreBtn");
    const searchVal = document.getElementById("searchInput").value.trim().toLowerCase();
    
    if (!medList) return;
    medList.innerHTML = "";

    let displayData;
    if (searchVal !== "") {
        displayData = data.filter(m => m.name.toLowerCase().includes(searchVal));
        if (showMoreBtn) showMoreBtn.style.display = "none";
    } else {
        displayData = isShowingAll ? data : data.slice(0, 12);
        if (showMoreBtn) showMoreBtn.style.display = (data.length <= 12 || isShowingAll) ? "none" : "inline-block";
    }

    displayData.forEach((med) => {
        const realIdx = medicines.findIndex(m => m.name === med.name);
        const card = document.createElement("div");
        card.className = "med-card";
        
        let statusColor = "#28a745"; 
        if(med.qty <= 0) statusColor = "#e74c3c"; 
        else if(med.qty <= 10) statusColor = "#f39c12"; 

        card.style.borderLeft = `5px solid ${statusColor}`;
        card.innerHTML = `
            <h3>${med.name}</h3>
            <p><small>Batch: ${med.batch} | Exp: ${med.exp}</small></p>
            <p>Live Stock: <b style="color:blue;">${med.qty}</b></p>
            <p style="color:#28a745; font-weight:700">MRP: ₹${med.mrp}</p>
            <div class="qty-row">
                <button class="q-btn" onclick="changeQtyUI(${realIdx}, -1)">-</button>
                <b id="qty-box-${realIdx}">1</b>
                <button class="q-btn" onclick="changeQtyUI(${realIdx}, 1)">+</button>
            </div>
            <button class="add-btn" onclick="addToCart(${realIdx})" ${med.qty <= 0 ? 'disabled' : ''}>Add to Order</button>
        `;
        medList.appendChild(card);
    });
}

function changeQtyUI(idx, delta) {
    const el = document.getElementById(`qty-box-${idx}`);
    let val = parseInt(el.innerText) + delta;
    if(val >= 1) el.innerText = val;
}

function addToCart(idx) {
    const med = medicines[idx];
    const orderedQty = parseInt(document.getElementById(`qty-box-${idx}`).innerText);
    if (orderedQty > med.qty) return alert("Stock kam hai!");

    const existing = cart.find(i => i.name === med.name);
    if(existing) existing.orderedQty += orderedQty;
    else cart.push({...med, orderedQty: orderedQty});
    updateCartUI();
}

function updateCartUI() {
    const badge = document.getElementById('cart-badge');
    const list = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    if (badge) badge.innerText = cart.length;
    
    if(!list) return;
    if(cart.length === 0) {
        list.innerHTML = "<p style='text-align:center; padding:20px; color:#888;'>Cart khali hai...</p>";
        if(totalEl) totalEl.innerText = "0.00";
        return;
    }

    list.innerHTML = "";
    let total = 0;
    cart.forEach((item, i) => {
        let itemTotal = item.mrp * item.orderedQty;
        total += itemTotal;
        list.innerHTML += `<div style="padding:10px; border-bottom:1px solid #eee">
            <b>${item.name}</b><br>
            ${item.orderedQty} x ₹${item.mrp} = ₹${itemTotal.toFixed(2)}
            <button onclick="removeItem(${i})" style="color:red; float:right; border:none; background:none; cursor:pointer;">Remove</button>
        </div>`;
    });
    if(totalEl) totalEl.innerText = total.toFixed(2);
}

function sendWhatsAppOrder() {
    if(cart.length === 0) return alert("Pehle items add karein!");
    cart.forEach(cartItem => {
        const idx = medicines.findIndex(m => m.name === cartItem.name);
        if(idx !== -1) { medicines[idx].qty = parseFloat((medicines[idx].qty - cartItem.orderedQty).toFixed(2)); }
    });
    db.ref('inventory').set(medicines).then(() => {
        let text = "📦 *NEW ORDER - JMD MEDICAL*%0A";
        cart.forEach(i => text += `• ${i.name} (Qty: ${i.orderedQty})%0A`);
        window.open(`https://wa.me/${myWhatsAppNumber}?text=${text}`, '_blank');
        cart = []; updateCartUI();
    });
}

function openAdmin() { document.getElementById('adminModal').style.display = 'flex'; }
function closeAdmin() { document.getElementById('adminModal').style.display = 'none'; }
function loginAdmin() {
    const u = document.getElementById('adminUser').value;
    const p = document.getElementById('adminPass').value;
    if (u === adminID && p === adminPass) {
        document.getElementById('adminAuth').style.display = 'none';
        document.getElementById('adminControls').style.display = 'block';
        const select = document.getElementById('medSelect');
        select.innerHTML = medicines.map((m, i) => `<option value="${i}">${m.name}</option>`).join("");
    } else { alert("ID/Pass Galat!"); }
}

function updateStockNow() {
    const idx = document.getElementById('medSelect').value;
    const addQty = parseFloat(document.getElementById('newStockQty').value);
    if(!isNaN(addQty)) {
        medicines[idx].qty = parseFloat((parseFloat(medicines[idx].qty) + addQty).toFixed(2));
        db.ref('inventory').set(medicines);
        alert("Stock updated globally!");
    }
}

function resetAllStock() {
    if(confirm("Factory Reset?")) {
        db.ref('inventory').set(initialMedicines).then(() => location.reload());
    }
}

function filterCategory(cat, btn) {
    document.querySelectorAll('.cat-chip').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    if(cat === 'all') { displayMeds(medicines); return; }
    const filtered = medicines.filter(m => m.name.toUpperCase().includes(cat.toUpperCase()));
    displayMeds(filtered);
}

function removeItem(i) { cart.splice(i, 1); updateCartUI(); }
function toggleCart() { document.getElementById('cartSidebar').classList.toggle('open'); }
function showAllMeds() { isShowingAll = true; displayMeds(medicines); }
function searchMedicine() { displayMeds(medicines); }
function closeHistory() { document.getElementById('historyModal').style.display = 'none'; }
function showHistory() { alert("Orders are now live on Firebase!"); }

function updateClock() {
    const clockEl = document.getElementById('live-clock');
    if (clockEl) clockEl.innerText = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
window.onload = updateClock;
