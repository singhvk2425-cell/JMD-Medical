// Aapka Asli Stock Data
const medicines = [
    { name: "ACILOC RD 15 TAB", qty: 34, rate: 63.1 },
    { name: "AKUZID 1000", qty: 18, rate: 156.38 },
    { name: "AKUZID TZ 250g", qty: 49, rate: 67.68 },
    { name: "AMIKAMAC 500", qty: 1, rate: 36.4 },
    { name: "AMIRID TAB", qty: 3, rate: 79.89 },
    { name: "AROPEN TAB", qty: 16.1, rate: 91.21 },
    { name: "AZIKOT 500", qty: 12, rate: 79.48 },
    { name: "Alex Lozenges 5mg", qty: 7, rate: 83.71 },
    { name: "Amelior-D3 Tab", qty: 6, rate: 177.0 },
    { name: "Asrizone-TZ 1.125 in", qty: 64, rate: 176.6 },
    { name: "CANDID POWDER 120 GM", qty: 8, rate: 116.49 },
    { name: "CEFOPAN O TAB", qty: 30.2, rate: 128.21 }
    // Aap aise hi aur bhi medicines yahan add kar sakte hain
];

const medList = document.getElementById("medList");

function displayMeds(data) {
    medList.innerHTML = "";
    data.forEach(med => {
        const card = document.createElement("div");
        card.className = "med-card";
        card.innerHTML = `
            <h3>${med.name}</h3>
            <p>Availability: <span class="qty">${med.qty} Units</span></p>
            <p class="price">Price: ₹${med.rate}</p>
            <a href="https://wa.me/91XXXXXXXXXX?text=Hi JMD Medical, mujhe ${med.name} chahiye." target="_blank" class="btn-order">
                <i class="fab fa-whatsapp"></i> Order on WhatsApp
            </a>
        `;
        medList.appendChild(card);
    });
}

// Search Logic
function searchMedicine() {
    const term = document.getElementById("searchInput").value.toLowerCase();
    const filtered = medicines.filter(med => med.name.toLowerCase().includes(term));
    displayMeds(filtered);
}

// Initial Display
displayMeds(medicines);
