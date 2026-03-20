// Sample Stock Data
const medicines = [
    { name: "Paracetamol", price: 20, stock: 50 },
    { name: "Vitamin C", price: 150, stock: 12 },
    { name: "Cough Syrup", price: 85, stock: 0 },
    { name: "Pain Relief Gel", price: 110, stock: 25 }
];

const medGrid = document.getElementById('medGrid');
let cartCount = 0;

function displayMeds() {
    medicines.forEach(med => {
        const card = document.createElement('div');
        card.className = 'med-card';
        const inStock = med.stock > 0;
        
        card.innerHTML = `
            <h3>${med.name}</h3>
            <p class="price">₹${med.price}</p>
            <p class="stock-status" style="color: ${inStock ? 'green' : 'red'}">
                ${inStock ? 'In Stock: ' + med.stock : 'Out of Stock'}
            </p>
            <button class="btn-order" ${!inStock ? 'disabled' : ''} onclick="orderMed('${med.name}')">
                ${inStock ? 'Order Now' : 'N/A'}
            </button>
        `;
        medGrid.appendChild(card);
    });
}

function orderMed(name) {
    cartCount++;
    document.getElementById('cartCount').innerText = cartCount;
    
    // WhatsApp Order Link
    const phone = "91XXXXXXXXXX"; // Apna number yahan likhein
    const msg = `Hi JMD Medical! Mujhe ye medicine order karni hai: ${name}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

displayMeds();
