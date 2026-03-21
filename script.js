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

if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
const db = firebase.database();

const myWhatsAppNumber = "9110116102"; 
const adminID = "vishal123";      
const adminPass = "jmd123";       

let medicines = [];
let cart = [];
let isShowingAll = false;

// MASTER DATA (Short list for example, replace with your 443 list)
const initialMedicines = [
    { "name": "ACILOC 150TAB", "qty": 15.0, "mrp": 49.1, "exp": "31/10/26", "batch": "LD24242" },
    { "name": "DOLO 250 SYP", "qty": 10.0, "mrp": 45.02, "exp": "31/10/27", "batch": "DOTL1296" }
];

// --- LIVE SYNC ---
db.ref('inventory').on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) { medicines = data; displayMeds(medicines); }
});

// History Sync
db.ref('orders').on('value', (snapshot) => {
    const historyData = snapshot.val();
    const historyList = document.getElementById('historyList');
    if (!historyList) return;
    
    if (!historyData) {
        historyList.innerHTML = "<p style='text-align:center; padding:20px; color:#888;'>Koi purana order nahi hai.</p>";
        return;
    }

    let html = "";
    Object.values(historyData).reverse().forEach(order => {
        html += `<div style="background:#f9f9f9; padding:15px; border-radius:10px; margin-bottom:10px; border-left:4px solid #25D366; font-size:13px;">
            <div style="display:flex; justify-content:space-between; font-weight:bold; margin-bottom:5px;">
                <span>📅 ${order.time}</span>
                <span style="color:#28a745;">₹${order.total}</span>
            </div>
            <div style="color:#555;">${order.summary}</div>
        </div>`;
    });
    historyList.innerHTML = html;
});

// --- DISPLAY LOGIC ---
function displayMeds(data) {
    const medList = document.getElementById("medList");
    const searchVal = document.getElementById("searchInput").value.trim().toLowerCase();
    if (!medList) return;
    medList.innerHTML = "";

    let displayData = searchVal !== "" ? data.filter(m => m.name.toLowerCase().includes(searchVal)) : (isShowingAll ? data : data.slice(0, 12));

    displayData.forEach((med) => {
        const realIdx = medicines.findIndex(m => m.name === med.name);
        const isTabCap = med.name.toUpperCase().includes("TAB") || med.name.toUpperCase().includes("CAP");
        const card = document.createElement("div");
        card.className = "med-card";
        card.style.borderLeft = `5px solid ${med.qty <= 0 ? '#e74c3c' : (med.qty <= 1.0 ? '#f39c12' : '#28a745')}`;
        
        card.innerHTML = `
            <h3>${med.name}</h3>
            <p><small>Batch: ${med.batch} | Exp: ${med.exp}</small></p>
            <p>Stock: <b style="color:blue;">${parseFloat(med.qty).toFixed(1)} ${isTabCap ? 'Strips' : 'Pcs'}</b></p>
            <p style="color:#28a745; font-weight:700">₹${Number(med.mrp).toFixed(2)} /${isTabCap ? 'Strip' : 'Pce'}</p>
            <div class="qty-row">
                <button class="q-btn" onclick="changeQtyUI(${realIdx}, -1)">-</button>
                <b id="qty-box-${realIdx}">1</b>
                <button class="q-btn" onclick="changeQtyUI(${realIdx}, 1)">+</button>
                <span style="font-size:12px; margin-left:5px;">${isTabCap ? 'Tabs' : 'Qty'}</span>
            </div>
            <button class="add-btn" onclick="addToCart(${realIdx})" ${med.qty <= 0 ? 'disabled' : ''}>Add Order</button>
        `;
        medList.appendChild(card);
    });
}

function changeQtyUI(idx, delta) {
    const el = document.getElementById(`qty-box-${idx}`);
    if(el){
        let val = parseInt(el.innerText) + delta;
        if(val >= 1) el.innerText = val;
    }
}

function addToCart(idx) {
    const med = medicines[idx];
    const reqQty = parseInt(document.getElementById(`qty-box-${idx}`).innerText);
    const isTabCap = med.name.toUpperCase().includes("TAB") || med.name.toUpperCase().includes("CAP");
    const stockVal = isTabCap ? (reqQty / 10) : reqQty;

    if (stockVal > med.qty) return alert("Stock kam hai!");

    const existing = cart.find(i => i.name === med.name);
    if(existing) {
        existing.orderedQty += reqQty;
        existing.stockVal += stockVal;
    } else {
        cart.push({
            name: med.name, mrp: med.mrp, orderedQty: reqQty, stockVal: stockVal, isTabCap: isTabCap
        });
    }
    updateCartUI();
}

function updateCartUI() {
    const list = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    const badge = document.getElementById('cart-badge');
    if (badge) badge.innerText = cart.length;
    if(!list) return;

    if(cart.length === 0) {
        list.innerHTML = "<p style='text-align:center; padding:20px; color:#888;'>Cart khali hai...</p>";
        if(totalEl) totalEl.innerText = "0.00";
        return;
    }

    list.innerHTML = "";
    let grandTotal = 0;
    cart.forEach((item, i) => {
        let price = item.isTabCap ? (Number(item.mrp) / 10 * item.orderedQty) : (Number(item.mrp) * item.orderedQty);
        grandTotal += price;
        list.innerHTML += `<div style="padding:10px; border-bottom:1px solid #eee">
            <b>${item.name}</b><br>${item.orderedQty} ${item.isTabCap ? 'Tabs' : 'Pcs'} = ₹${price.toFixed(2)}
            <button onclick="removeItem(${i})" style="color:red; float:right; border:none; background:none;">Remove</button>
        </div>`;
    });
    if(totalEl) totalEl.innerText = grandTotal.toFixed(2);
}

function sendWhatsAppOrder() {
    if(cart.length === 0) return alert("Items add karein!");
    let totalBill = 0;
    let summaryText = "";
    let waText = "📦 *NEW ORDER - JMD MEDICAL*%0A--------------------------%0A";
    
    cart.forEach((item, index) => {
        let price = item.isTabCap ? (Number(item.mrp) / 10 * item.orderedQty) : (Number(item.mrp) * item.orderedQty);
        totalBill += price;
        waText += `${index + 1}. *${item.name}*%0A   Qty: ${item.orderedQty} ${item.isTabCap ? 'Tabs' : 'Pcs'}%0A   Price: ₹${price.toFixed(2)}%0A`;
        summaryText += `${item.name} (${item.orderedQty} ${item.isTabCap ? 'Tabs' : 'Pcs'}), `;
        
        const idx = medicines.findIndex(m => m.name === item.name);
        if(idx !== -1) { medicines[idx].qty = parseFloat((medicines[idx].qty - item.stockVal).toFixed(2)); }
    });

    waText += "--------------------------%0A";
    waText += `*GRAND TOTAL: ₹${totalBill.toFixed(2)}*`;

    // Save to History
    const orderLog = {
        time: new Date().toLocaleString(),
        total: totalBill.toFixed(2),
        summary: summaryText.slice(0, -2)
    };
    db.ref('orders').push(orderLog);

    // Update Stock & WhatsApp
    db.ref('inventory').set(medicines).then(() => {
        window.open(`https://wa.me/${myWhatsAppNumber}?text=${waText}`, '_blank');
        cart = []; updateCartUI();
    });
}

// --- ADMIN PANEL ---
function loginAdmin() {
    if (document.getElementById('adminUser').value === adminID && document.getElementById('adminPass').value === adminPass) {
        document.getElementById('adminAuth').style.display = 'none';
        document.getElementById('adminControls').style.display = 'block';
        document.getElementById('medSelect').innerHTML = medicines.map((m, i) => `<option value="${i}">${m.name} (${m.qty})</option>`).join("");
        
        // Add Clear History button if not exists
        if(!document.getElementById('clearHistBtn')) {
            const btn = document.createElement("button");
            btn.id = "clearHistBtn";
            btn.innerText = "❌ Clear Order History";
            btn.onclick = clearHistory;
            btn.className = "whatsapp-btn";
            btn.style.background = "#555";
            btn.style.marginTop = "10px";
            document.getElementById('adminControls').appendChild(btn);
        }
    } else { alert("ID/Pass Galat!"); }
}

function clearHistory() {
    if(confirm("Saari Order History delete kar dein?")) {
        db.ref('orders').remove().then(() => alert("History Cleaned!"));
    }
}

function updateStockNow() {
    const idx = document.getElementById('medSelect').value;
    const addVal = parseFloat(document.getElementById('newStockQty').value);
    if(!isNaN(addVal)) {
        medicines[idx].qty = parseFloat((parseFloat(medicines[idx].qty) + addVal).toFixed(2));
        db.ref('inventory').set(medicines);
        alert("Stock Updated!");
        loginAdmin(); 
    }
}

function removeItem(i) { cart.splice(i, 1); updateCartUI(); }
function toggleCart() { document.getElementById('cartSidebar').classList.toggle('open'); }
function showAllMeds() { isShowingAll = true; displayMeds(medicines); }
function searchMedicine() { displayMeds(medicines); }
function openAdmin() { document.getElementById('adminModal').style.display = 'flex'; }
function closeAdmin() { document.getElementById('adminModal').style.display = 'none'; }
function showHistory() { document.getElementById('historyModal').style.display = 'flex'; }
function closeHistory() { document.getElementById('historyModal').style.display = 'none'; }
function updateClock() { 
    const el = document.getElementById('live-clock');
    if(el) el.innerText = new Date().toLocaleTimeString(); 
}

setInterval(updateClock, 1000);
window.onload = updateClock;
