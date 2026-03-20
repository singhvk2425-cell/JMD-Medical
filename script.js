// 1. SETTINGS
const myWhatsAppNumber = "9110116102"; 

// 2. INITIAL DATA
const initialMedicines = [
    { "name": "10 ML", "qty": 339.0, "rate": 0.0 },
    { "name": "3ML", "qty": 205.0, "rate": 0.0 },
    { "name": "5 ML", "qty": 207.0, "rate": 0.0 },
    { "name": "ABDOMINAL BELT REGUL", "qty": 3.0, "rate": 0.0 },
    { "name": "ACILOC RD 15 TAB", "qty": 34.0, "rate": 63.1 },
    { "name": "ACR-200 caps", "qty": 4.0, "rate": 87.26 },
    { "name": "AKUZID 1000", "qty": 18.0, "rate": 156.38 },
    { "name": "AKUZID TZ 250g", "qty": 49.0, "rate": 67.68 },
    { "name": "AMIKAMAC 500", "qty": 1.0, "rate": 36.4 },
    { "name": "AMIRID TAB", "qty": 3.0, "rate": 79.89 },
    { "name": "ANTIMAX 500MG", "qty": 11.4, "rate": 0.0 },
    { "name": "AROPEN TAB", "qty": 16.1, "rate": 91.21 },
    { "name": "AUSILID 600 MG TAB", "qty": 3.0, "rate": 176.18 },
    { "name": "AUSITUM 500 MG", "qty": 14.5, "rate": 202.47 },
    { "name": "AVERT 16", "qty": 11.0, "rate": 108.92 },
    { "name": "AZIKOT 500", "qty": 12.0, "rate": 79.48 },
    { "name": "AZILISER SACHETS", "qty": 46.0, "rate": 30.04 },
    { "name": "AZOLE L TAB", "qty": 25.0, "rate": 15.4 },
    { "name": "Ab-soft Plus syp", "qty": 9.0, "rate": 0.0 },
    { "name": "Abdobnal Belt U", "qty": 9.0, "rate": 0.0 },
    { "name": "Alex Lozenges 5mg", "qty": 7.0, "rate": 83.71 },
    { "name": "Ambroled-DX Syp", "qty": 3.0, "rate": 78.03 },
    { "name": "Amelior-D3 Tab", "qty": 6.0, "rate": 177.0 },
    { "name": "Applevit 4G cap", "qty": 1.0, "rate": 198.78 },
    { "name": "Ariflam MR tab", "qty": 8.0, "rate": 195.22 },
    { "name": "Asrizone-TZ 1.125 in", "qty": 64.0, "rate": 176.6 },
    { "name": "BABY SECTION", "qty": 18.0, "rate": 3.36 },
    { "name": "BABY SET WITH CYTOLO", "qty": 4.0, "rate": 0.0 },
    { "name": "BABY SET WITHOUT CYT", "qty": 5.0, "rate": 0.0 },
    { "name": "BELYCAN + CAP", "qty": 13.0, "rate": 94.58 },
    { "name": "BGCORT- TM TAB", "qty": 5.0, "rate": 329.54 },
    { "name": "BILMEGH TAB", "qty": 11.0, "rate": 106.87 },
    { "name": "BISLARY WATER 1L", "qty": 42.0, "rate": 0.0 },
    { "name": "BOTTAL 150ML", "qty": 68.0, "rate": 0.0 },
    { "name": "BOTTAL 250 ML", "qty": 53.0, "rate": 0.0 },
    { "name": "BOTTOL 125ML", "qty": 37.0, "rate": 0.0 },
    { "name": "BREEZY", "qty": 87.0, "rate": 56.0 },
    { "name": "BT-SET", "qty": 7.0, "rate": 23.89 },
    { "name": "Bio-D3 Joint", "qty": 1.0, "rate": 591.05 },
    { "name": "C-Lysin Gold Tab", "qty": 3.9, "rate": 47.35 },
    { "name": "CACEFEN - P", "qty": 46.8, "rate": 26.91 },
    { "name": "CANDID POWDER 120 GM", "qty": 8.0, "rate": 116.49 },
    { "name": "CEFOPAN O TAB", "qty": 30.2, "rate": 128.21 },
    { "name": "CITAPURE FORTE", "qty": 34.0, "rate": 68.79 },
    { "name": "CLONAX MD-0.5", "qty": 16.0, "rate": 27.94 },
    { "name": "CO2", "qty": 1.0, "rate": 145.71 },
    { "name": "CONSTINA POWDER", "qty": 9.0, "rate": 112.25 },
    { "name": "Califer-XT tab", "qty": 5.0, "rate": 131.39 },
    { "name": "Cefoblaze O tab", "qty": 12.0, "rate": 76.59 },
    { "name": "Cefuross-125 tab", "qty": 3.0, "rate": 114.85 },
    { "name": "Cefuswag - CV 500", "qty": 8.0, "rate": 432.4 },
    { "name": "Cintagest drops", "qty": 1.0, "rate": 53.82 },
    { "name": "Cyclovarin cap", "qty": 2.0, "rate": 232.0 },
    { "name": "cefuross 250", "qty": 6.0, "rate": 160.22 },
    { "name": "DEC PED SYP", "qty": 6.0, "rate": 49.4 },
    { "name": "DEC-FORTE TAB", "qty": 18.0, "rate": 46.39 },
    { "name": "DFO 4x Gel", "qty": 4.0, "rate": 150.12 },
    { "name": "DIAPER ADULT (M)", "qty": 1.0, "rate": 0.0 },
    { "name": "DOXOKOT M TAB", "qty": 6.9, "rate": 64.26 },
    { "name": "Dideral Plus tab", "qty": 5.0, "rate": 73.3 },
    { "name": "Docorite cap.", "qty": 6.0, "rate": 106.52 },
    { "name": "Doxyrax OD tab", "qty": 9.0, "rate": 69.6 },
    { "name": "ECH-700 CAP", "qty": 4.0, "rate": 123.33 },
    { "name": "ENTROQUNOL TAB", "qty": 2.0, "rate": 47.05 },
    { "name": "ERZL Orange Drink", "qty": 77.0, "rate": 26.05 },
    { "name": "ESIRADO RD CAP", "qty": 1.4, "rate": 54.26 },
    { "name": "ESOKOT D CAP", "qty": 23.5, "rate": 70.47 },
    { "name": "EVECARE FORTE LIQUID", "qty": 7.0, "rate": 185.29 },
    { "name": "Enterogermina", "qty": 8.0, "rate": 0.0 },
    { "name": "Esirado RD 15 Capsul", "qty": 114.0, "rate": 81.38 },
    { "name": "Esokot - L", "qty": 17.0, "rate": 63.49 },
    { "name": "Espeedo- SP", "qty": 20.0, "rate": 88.0 },
    { "name": "Exacyl 500 Tab", "qty": 12.0, "rate": 219.45 },
    { "name": "FEMCLAVE LB 625 TAB", "qty": 36.0, "rate": 141.86 },
    { "name": "FLORASANTE CAP", "qty": 1.0, "rate": 198.6 },
    { "name": "Farofence CV", "qty": 17.0, "rate": 427.5 },
    { "name": "Farozius-200", "qty": 3.0, "rate": 416.93 },
    { "name": "Fe Daily Tab", "qty": 9.0, "rate": 221.12 },
    { "name": "GERMIRICH-ZYME CAP", "qty": 6.0, "rate": 89.6 },
    { "name": "GLOVES 7 NO", "qty": 12.0, "rate": 0.0 },
    { "name": "Glexim CV 325", "qty": 3.0, "rate": 195.51 },
    { "name": "Growly Syrup", "qty": 10.0, "rate": 81.65 },
    { "name": "HOTFLAM - P", "qty": 69.2, "rate": 17.74 },
    { "name": "HOTFLAM - SP TAB", "qty": 16.3, "rate": 50.66 },
    { "name": "HUGGIES (M) 28 PANTS", "qty": 20.0, "rate": 0.0 },
    { "name": "HUGGIES (M) 38 PANTS", "qty": 20.0, "rate": 0.0 },
    { "name": "HUGGIES (M) 5 PANT", "qty": 19.0, "rate": 0.0 },
    { "name": "HUGGIES (M) 8 PANTS", "qty": 48.0, "rate": 0.0 },
    { "name": "ITRAMEGH 200MG", "qty": 3.0, "rate": 131.22 },
    { "name": "IXOVIT 9G S/G", "qty": 6.0, "rate": 178.42 },
    { "name": "InnoVAL Gel", "qty": 3.0, "rate": 273.6 },
    { "name": "it mac 200", "qty": 2.0, "rate": 148.18 },
    { "name": "K-Lyte-P", "qty": 1.0, "rate": 47.26 },
    { "name": "K-WIN 10 AMP", "qty": 5.0, "rate": 44.95 },
    { "name": "KLARIM-250 DRY SYP", "qty": 5.0, "rate": 162.69 },
    { "name": "LACTISYN SACHET", "qty": 15.0, "rate": 41.28 },
    { "name": "LACTOGEN 1 400GM", "qty": 2.0, "rate": 408.71 },
    { "name": "LACTOGEN 1 200G", "qty": 8.0, "rate": 218.75 },
    { "name": "LAXARIZ SYP", "qty": 22.0, "rate": 109.3 },
    { "name": "LIZOMAC 600MG", "qty": 2.0, "rate": 303.61 },
    { "name": "Lactobex-PPB cap", "qty": 0.6, "rate": 86.67 },
    { "name": "Leixo-fem tab", "qty": 8.0, "rate": 278.37 },
    { "name": "Lyziton Kid syp", "qty": 3.0, "rate": 78.51 },
    { "name": "MIGRAVAS P", "qty": 21.9, "rate": 104.24 },
    { "name": "MIRABET-S-25 TAB", "qty": 1.0, "rate": 310.21 },
    { "name": "MIRABET-S-50 TAB", "qty": 3.0, "rate": 387.76 },
    { "name": "MONTORIL TAB", "qty": 16.0, "rate": 62.7 },
    { "name": "MORTEGA TAB", "qty": 5.0, "rate": 338.5 },
    { "name": "Megapot-MB6", "qty": 10.0, "rate": 115.68 },
    { "name": "Migrant-500", "qty": 7.0, "rate": 71.82 },
    { "name": "Multizavit Cap", "qty": 11.0, "rate": 148.48 },
    { "name": "medifin gauze", "qty": 1.0, "rate": 60.0 },
    { "name": "migravas 10mg", "qty": 6.0, "rate": 39.1 },
    { "name": "N T GAS TABLET", "qty": 5.2, "rate": 61.04 },
    { "name": "NAVIGEN-AP", "qty": 10.0, "rate": 127.61 },
    { "name": "NERVORANT 5G CREAM", "qty": 10.0, "rate": 142.8 },
    { "name": "NIDAZAP 500ML", "qty": 2.0, "rate": 36.4 },
    { "name": "NIPPEL", "qty": 17.0, "rate": 0.0 },
    { "name": "NORMALIZATION MASK", "qty": 1.0, "rate": 0.0 },
    { "name": "nuvitical 60K tab", "qty": 4.0, "rate": 82.7 },
    { "name": "OSRACAL D3 NANO", "qty": 18.0, "rate": 181.4 },
    { "name": "PRULINK 2 TAB", "qty": 8.0, "rate": 174.16 },
    { "name": "Pacimol MF 125ml", "qty": 4.0, "rate": 35.11 },
    { "name": "Poviquin", "qty": 4.0, "rate": 26.25 },
    { "name": "Pregazot NT", "qty": 4.0, "rate": 143.34 },
    { "name": "Prostalyn Cap", "qty": 8.0, "rate": 142.12 },
    { "name": "pharmazin MD-5", "qty": 12.0, "rate": 45.44 },
    { "name": "RABEMAC -DSR 15 t", "qty": 7.0667, "rate": 165.22 },
    { "name": "RAXOFLAM TP", "qty": 19.2, "rate": 89.06 },
    { "name": "REJULIV PLUS SYP", "qty": 2.0, "rate": 219.68 },
    { "name": "RIKVIT-HD", "qty": 35.0, "rate": 41.21 },
    { "name": "Rucam 400", "qty": 3.0, "rate": 318.0 },
    { "name": "SATMINE OINT 10GM", "qty": 13.0, "rate": 147.6 },
    { "name": "SEPROLIV SYP", "qty": 9.0, "rate": 93.92 },
    { "name": "SEPTILOC ONITMENT", "qty": 2.0, "rate": 95.0 },
    { "name": "SILICON CATHETER 16", "qty": 2.0, "rate": 145.0 },
    { "name": "SILICON CHATHER 14 N", "qty": 3.0, "rate": 0.0 },
    { "name": "SLEEPOLAX SPRAY", "qty": 6.0, "rate": 347.71 },
    { "name": "SOFY PAD MRP 32", "qty": 5.0, "rate": 0.0 },
    { "name": "SP- CAL Plus cap", "qty": 3.0, "rate": 84.53 },
    { "name": "SPARK SYP", "qty": 9.0, "rate": 189.37 },
    { "name": "STERIPORE TAP", "qty": 9.0, "rate": 0.0 },
    { "name": "SUPERJOINT-GM TAB", "qty": 7.5, "rate": 160.59 },
    { "name": "SV SET 20 NO.", "qty": 5.0, "rate": 50.2 },
    { "name": "SV SET 22 NO.", "qty": 26.0, "rate": 7.28 },
    { "name": "Sarcoboost Sachet", "qty": 28.0, "rate": 57.0 },
    { "name": "Sucraford-O sup", "qty": 9.0, "rate": 136.51 },
    { "name": "Systoliv syp", "qty": 8.0, "rate": 0.0 },
    { "name": "safcold tab", "qty": 31.6, "rate": 45.74 },
    { "name": "saltum kid 250", "qty": 5.0, "rate": 212.93 },
    { "name": "THROMBOTROY QPS SPRA", "qty": 1.0, "rate": 143.99 },
    { "name": "TINZIT", "qty": 1.0, "rate": 247.0 },
    { "name": "TUSSBERRY LS DROP", "qty": 5.0, "rate": 43.07 },
    { "name": "UBEGOLD", "qty": 4.0, "rate": 214.82 },
    { "name": "UDILINK 300 MG TAB", "qty": 17.0, "rate": 442.32 },
    { "name": "UGBACT 500", "qty": 17.0, "rate": 432.0 },
    { "name": "UPCID - O DS SYP", "qty": 34.0, "rate": 193.05 },
    { "name": "UPCID-DSR TAB", "qty": 28.0, "rate": 79.8 },
    { "name": "URIPOT MB6", "qty": 7.0, "rate": 148.55 },
    { "name": "URISOFT CAP", "qty": 9.0, "rate": 182.4 },
    { "name": "Ulpan Gel syp", "qty": 24.0, "rate": 148.05 },
    { "name": "Vitkul - EC tab", "qty": 10.0, "rate": 0.0 },
    { "name": "Vonolink 20 tab", "qty": 17.0, "rate": 109.46 },
    { "name": "Weekzot - D3", "qty": 1.0, "rate": 85.43 },
    { "name": "XERODERM OTC CREAM", "qty": 3.0, "rate": 0.0 },
    { "name": "Xtril Kid Syrup", "qty": 2.0, "rate": 63.85 },
    { "name": "xerolac cap", "qty": 5.0, "rate": 0.0 },
    { "name": "zikem-200 susp", "qty": 8.0, "rate": 69.23 },
    { "name": "FOLYS CATHETAR 24", "qty": 20.0, "rate": 0.0 },
    { "name": "GAUZE", "qty": 3.0, "rate": 58.83 },
    { "name": "INTRAFIX AIR", "qty": 24.0, "rate": 0.0 },
    { "name": "KITKATH 22", "qty": 11.0, "rate": 0.0 },
    { "name": "KITKATH 24", "qty": 17.0, "rate": 12.94 },
    { "name": "KLICK CLAMP", "qty": 89.0, "rate": 0.0 },
    { "name": "MAMY POKO PANTS 1 P", "qty": 8.0, "rate": 0.0 },
    { "name": "MAMYPOKO PANTS (M) 2", "qty": 4.0, "rate": 0.0 },
    { "name": "MICROPORE", "qty": 3.0, "rate": 0.0 },
    { "name": "STAYFREE XL MRP 40", "qty": 25.0, "rate": 0.0 },
    { "name": "STAYFREE regular mrp", "qty": 16.0, "rate": 0.0 },
    { "name": "ZIG ZIG COTTON", "qty": 10.0, "rate": 0.0 },
    { "name": "LIMCEE 500MG", "qty": 9.4, "rate": 18.59 },
    { "name": "CURASIDE-ET", "qty": 1.0, "rate": 130.0 },
    { "name": "L-301 CAP", "qty": 4.0, "rate": 80.6 },
    { "name": "AZOLE L syrup", "qty": 12.0, "rate": 14.14 },
    { "name": "AUSITUM CV 625", "qty": 15.0, "rate": 289.84 },
    { "name": "D-PROTIN POWDER", "qty": 1.0, "rate": 0.0 },
    { "name": "DOLO 250 SYP", "qty": 1.0, "rate": 28.21 },
    { "name": "DOLO 650 TAB", "qty": 20.9333, "rate": 21.7 },
    { "name": "MECONERV - Z SYP", "qty": 12.0, "rate": 196.97 },
    { "name": "KENACORT 40MG/ML", "qty": 1.0, "rate": 161.23 },
    { "name": "SARIDON TAB", "qty": 3.1, "rate": 40.38 },
    { "name": "STEMETIL MD", "qty": 1.3333, "rate": 153.61 },
    { "name": "DEXONA INJ", "qty": 1.0, "rate": 8.94 },
    { "name": "TINIBA 500ML", "qty": 1.0, "rate": 0.0 },
    { "name": "TINIBA INFU", "qty": 8.0, "rate": 0.0 },
    { "name": "TRAMAZAC 100MG AMP", "qty": 44.0, "rate": 17.87 },
    { "name": "DULCOFLEX TAB", "qty": 4.8, "rate": 10.7 },
    { "name": "THROMBOPHOB OINT", "qty": 2.0, "rate": 176.81 },
    { "name": "BIO-D3-STRONG", "qty": 9.0, "rate": 205.24 },
    { "name": "CEFOLAC O 200MG", "qty": 4.0, "rate": 137.57 },
    { "name": "CLARIGARD 500", "qty": 2.0, "rate": 252.31 },
    { "name": "COVATIL CV 500", "qty": 2.0, "rate": 716.34 },
    { "name": "Cabliz 0.5", "qty": 1.0, "rate": 190.96 },
    { "name": "DEFCORT 6 TAB", "qty": 0.0, "rate": 0.0 }
];

// Browser memory se data lena
let medicines = JSON.parse(localStorage.getItem('jmd_inventory')) || initialMedicines;
let cart = [];
let isShowingAll = false;
let lastOrder = null;

// Browser mein data save karna
function syncStorage() {
    localStorage.setItem('jmd_inventory', JSON.stringify(medicines));
}

// 🕒 Live Clock
function updateClock() {
    const clockEl = document.getElementById('live-clock');
    if (clockEl) clockEl.innerText = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);

// 📦 FIXED DISPLAY LOGIC
function displayMeds(data) {
    const medList = document.getElementById("medList");
    const showMoreBtn = document.getElementById("showMoreBtn");
    const searchInput = document.getElementById("searchInput");
    const searchVal = searchInput ? searchInput.value.trim() : "";
    
    if (!medList) return;
    medList.innerHTML = "";

    // IMPORTANT: Agar search ho raha hai toh poori data dikhao (Filtered)
    // Warna agar search khali hai toh "Show More" ke hisab se slice karo
    let displayData;
    if (searchVal !== "") {
        displayData = data; // Search par poora filtered result dikhao
        if (showMoreBtn) showMoreBtn.style.display = "none"; 
    } else {
        displayData = isShowingAll ? data : data.slice(0, 10);
        if (showMoreBtn) {
            showMoreBtn.style.display = (data.length <= 10 || isShowingAll) ? "none" : "inline-block";
        }
    }

    displayData.forEach((med) => {
        const realIdx = medicines.findIndex(m => m.name === med.name);
        const card = document.createElement("div");
        card.className = "med-card";
        
        let border = "border-left: 5px solid #28a745"; 
        if(med.qty <= 0) border = "border-left: 5px solid #e74c3c"; 
        else if(med.qty <= 10) border = "border-left: 5px solid #f39c12"; 

        card.style = border;
        card.innerHTML = `
            <h3>${med.name}</h3>
            <p>Stock: <b id="stock-val-${realIdx}">${med.qty} Units</b></p>
            <p style="color:#28a745; font-weight:700">Price: ₹${med.rate}</p>
            <div class="qty-row">
                <span>Qty:</span>
                <div class="qty-btns">
                    <button class="q-btn" onclick="changeQty(${realIdx}, -1)">-</button>
                    <b id="qty-box-${realIdx}">1</b>
                    <button class="q-btn" onclick="changeQty(${realIdx}, 1)">+</button>
                </div>
            </div>
            <button class="add-btn" onclick="addToCart(${realIdx})" ${med.qty <= 0 ? 'disabled' : ''}>
                ${med.qty <= 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
        `;
        medList.appendChild(card);
    });
}

function changeQty(idx, delta) {
    const el = document.getElementById(`qty-box-${idx}`);
    if (el) {
        let val = parseInt(el.innerText) + delta;
        if(val >= 1) el.innerText = val;
    }
}

function addToCart(idx) {
    const med = medicines[idx];
    const qtyEl = document.getElementById(`qty-box-${idx}`);
    if (!med || !qtyEl) return;
    const orderedQty = parseInt(qtyEl.innerText);
    
    if (orderedQty > med.qty) {
        alert("Stock kam hai!");
        return;
    }
    
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
    let total = 0;
    if(!list) return;
    if(cart.length === 0) {
        list.innerHTML = "<p style='text-align:center; padding:20px; color:#888;'>Cart khali hai...</p>";
        if (totalEl) totalEl.innerText = "0.00";
        return;
    }
    list.innerHTML = "";
    cart.forEach((item, i) => {
        const itemTotal = item.rate * item.orderedQty;
        total += itemTotal;
        list.innerHTML += `<div style="padding:10px 0; border-bottom:1px solid #eee">
            <b>${item.name}</b><br>${item.orderedQty} x ₹${item.rate} = ₹${itemTotal.toFixed(2)}
            <button onclick="removeItem(${i})" style="color:red; border:none; background:none; cursor:pointer; float:right">Remove</button>
        </div>`;
    });
    if (totalEl) totalEl.innerText = total.toFixed(2);
}

function sendWhatsAppOrder() {
    if(cart.length === 0) return alert("Pehle cart mein medicines add karein!");
    lastOrder = JSON.parse(JSON.stringify(cart));
    cart.forEach(cartItem => {
        const targetMed = medicines.find(m => m.name === cartItem.name);
        if(targetMed) {
            targetMed.qty = parseFloat((targetMed.qty - cartItem.orderedQty).toFixed(2));
        }
    });
    syncStorage();
    let text = "📦 *JMD MEDICAL - NEW ORDER*%0A--------------------------%0A";
    cart.forEach((item, index) => {
        text += `${index + 1}. *${item.name}* (${item.orderedQty})%0A`;
    });
    window.open(`https://wa.me/${myWhatsAppNumber}?text=${text}`, '_blank');
    cart = [];
    updateCartUI();
    displayMeds(medicines);
    const cancelBtn = document.getElementById("cancelOrderBtn");
    if(cancelBtn) cancelBtn.style.display = "flex";
}

function cancelLastOrder() {
    if (!lastOrder) return;
    lastOrder.forEach(item => {
        const targetMed = medicines.find(m => m.name === item.name);
        if (targetMed) {
            targetMed.qty = parseFloat((targetMed.qty + item.orderedQty).toFixed(2));
        }
    });
    syncStorage();
    lastOrder = null;
    displayMeds(medicines);
    const cancelBtn = document.getElementById("cancelOrderBtn");
    if(cancelBtn) cancelBtn.style.display = "none";
    alert("Stock update ho gaya (Order Cancelled)!");
}

function removeItem(i) { cart.splice(i, 1); updateCartUI(); }
function toggleCart() { document.getElementById('cartSidebar').classList.toggle('open'); }
function showAllMeds() { isShowingAll = true; displayMeds(medicines); }

// 🔍 THE SEARCH FUNCTION (RE-BUILT)
function searchMedicine() {
    const val = document.getElementById("searchInput").value.toLowerCase();
    const filtered = medicines.filter(m => m.name.toLowerCase().includes(val));
    displayMeds(filtered); // Passing filtered data to display function
}

window.onload = () => {
    displayMeds(medicines);
    updateClock();
};
