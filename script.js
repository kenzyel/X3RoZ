// Data produk
const products = [
    {name: "MyAudio - Sonic Pro", img: "img/3.webp", price: "Rp 750.000", category: "Hybrid", badge: "bg-info text-dark", desc: "1DD + 2BA | 112dB"},
    {name: "MyAudio - Bass Head", img: "img/4.webp", price: "Rp 450.000", category: "Dynamic", badge: "bg-secondary", desc: "10mm Bass Driver"},
    {name: "MyAudio - Reference", img: "img/5.webp", price: "Rp 2.150.000", category: "Flagship", badge: "bg-warning text-dark", desc: "Planar Magnetic"},
    {name: "MyAudio - Clarity X", img: "img/6.webp", price: "Rp 1.200.000", category: "Studio", badge: "bg-success", desc: "Neutral Sound"}
];

const dacProducts = [
    {name: "MyAudio - Flow M1", img: "img/13.webp", price: "Rp 450.000", category: "Dongle DAC", badge: "bg-secondary", desc: "ESS Sabre | Hi-Res 32-bit"},
    {name: "MyAudio - Air Link", img: "img/9.webp", price: "Rp 1.100.000", category: "Bluetooth", badge: "bg-primary", desc: "LDAC | Balanced 4.4mm"}
];

const accessories = [
    {name: "Elite Cable 8-Core", img: "img/10.webp", price: "Rp 350.000", category: "Silver Plated", badge: "bg-warning text-dark", desc: "0.78mm | SPC Material"}
];

function createCard(product) {
    return `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="card h-100 shadow-sm">
                <img src="${product.img}" class="card-img-top p-3" alt="${product.name}">
                <div class="card-body">
                    <span class="badge ${product.badge} mb-2">${product.category}</span>
                    <h5 class="card-title h6 fw-bold">${product.name}</h5>
                    <p class="card-text small text-muted mb-2">${product.desc}</p>
                    <p class="card-text text-primary fw-bold mb-3">${product.price}</p>
                    <div class="d-grid"><button class="btn btn-dark btn-sm">Beli Sekarang</button></div>
                </div>
            </div>
        </div>
    `;
}

function loadProducts() {
    document.getElementById('productsContainer').innerHTML = products.map(createCard).join('');
    document.getElementById('dacContainer').innerHTML = dacProducts.map(createCard).join('');
    document.getElementById('accessoriesContainer').innerHTML = accessories.map(createCard).join('');
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebarNav');
    const overlay = document.getElementById('sidebarOverlay');
    const mainContent = document.getElementById('mainContent');
    
    sidebar.classList.toggle('show');
    overlay.classList.toggle('show');
    
    if (window.innerWidth > 992) {
        mainContent.classList.toggle('with-sidebar');
    }
}

function openLoginModal() {
    new bootstrap.Modal(document.getElementById('loginModal')).show();
}

function openAddItemModal() {
    new bootstrap.Modal(document.getElementById('addItemModal')).show();
}

function searchProducts(e) {
    e.preventDefault();
    const term = document.getElementById('mainSearch').value;
    if (term.trim()) alert(`Mencari: ${term}`);
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login berhasil!');
    bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
});

document.getElementById('addItemForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Barang berhasil ditambahkan!');
    bootstrap.Modal.getInstance(document.getElementById('addItemModal')).hide();
    this.reset();
});

window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebarNav');
    const overlay = document.getElementById('sidebarOverlay');
    const mainContent = document.getElementById('mainContent');
    
    if (window.innerWidth > 992) {
        sidebar.classList.add('show');
        overlay.classList.remove('show');
        mainContent.classList.add('with-sidebar');
    } else {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
        mainContent.classList.remove('with-sidebar');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    window.dispatchEvent(new Event('resize'));
});