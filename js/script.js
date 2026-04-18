// ===== PRODUCTS DATABASE =====
const products = [
    // WATCHES (10)
    {
        id: 1,
        name: 'Classic Analog Watch',
        category: 'watches',
        price: 2500,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
        featured: true,
        discount: 15
    },
    {
        id: 2,
        name: 'Smart Digital Watch',
        category: 'watches',
        price: 5500,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
        featured: true,
        discount: 0
    },
    {
        id: 3,
        name: 'Leather Strap Watch',
        category: 'watches',
        price: 3200,
        image: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&h=400&fit=crop',
        featured: false,
        discount: 10
    },
    {
        id: 4,
        name: 'Sports Chronograph Watch',
        category: 'watches',
        price: 4800,
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop',
        featured: false,
        discount: 20
    },
    {
        id: 5,
        name: 'Minimalist Steel Watch',
        category: 'watches',
        price: 3500,
        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
        featured: false,
        discount: 5
    },
    {
        id: 6,
        name: 'Vintage Gold Watch',
        category: 'watches',
        price: 6200,
        image: 'https://images.unsplash.com/photo-1554062407-98eeb64c6a62?w=400&h=400&fit=crop',
        featured: true,
        discount: 25
    },
    {
        id: 7,
        name: 'Blue Dial Watch',
        category: 'watches',
        price: 4200,
        image: 'https://images.unsplash.com/photo-1579124908547-c78fcde27caf?w=400&h=400&fit=crop',
        featured: false,
        discount: 8
    },
    {
        id: 8,
        name: 'Fitness Tracker Watch',
        category: 'watches',
        price: 5800,
        image: 'https://images.unsplash.com/photo-1575311373937-040b3ff6440d?w=400&h=400&fit=crop',
        featured: false,
        discount: 12
    },
    {
        id: 9,
        name: 'Mechanical Wrist Watch',
        category: 'watches',
        price: 7500,
        image: 'https://images.unsplash.com/photo-1532062909370-35cd01f6f10d?w=400&h=400&fit=crop',
        featured: true,
        discount: 0
    },
    {
        id: 10,
        name: 'Elegant Round Watch',
        category: 'watches',
        price: 3900,
        image: 'https://images.unsplash.com/photo-1585487119221-6ab9f47f9f8f?w=400&h=400&fit=crop',
        featured: false,
        discount: 15
    },

    // EARBUDS (10)
    {
        id: 11,
        name: 'Wireless Earbuds Pro',
        category: 'earbuds',
        price: 3800,
        image: 'https://images.unsplash.com/photo-1606841837239-c5a1a8a07af7?w=400&h=400&fit=crop',
        featured: true,
        discount: 20
    },
    {
        id: 12,
        name: 'Bass Boost Earbuds',
        category: 'earbuds',
        price: 2200,
        image: 'https://images.unsplash.com/photo-1617638924702-92f37fcb0f6d?w=400&h=400&fit=crop',
        featured: false,
        discount: 0
    },
    {
        id: 13,
        name: 'Noise Cancel Earbuds',
        category: 'earbuds',
        price: 5500,
        image: 'https://images.unsplash.com/photo-1610519266994-af3c910b5d5f?w=400&h=400&fit=crop',
        featured: true,
        discount: 15
    },
    {
        id: 14,
        name: 'Sport Water Resistant Earbuds',
        category: 'earbuds',
        price: 2800,
        image: 'https://images.unsplash.com/photo-1628839052956-5ea30f9a0c0c?w=400&h=400&fit=crop',
        featured: false,
        discount: 10
    },
    {
        id: 15,
        name: 'Premium Sound Earbuds',
        category: 'earbuds',
        price: 4500,
        image: 'https://images.unsplash.com/photo-1633675254347-fba0b997e7ec?w=400&h=400&fit=crop',
        featured: false,
        discount: 18
    },
    {
        id: 16,
        name: 'Compact Mini Earbuds',
        category: 'earbuds',
        price: 1800,
        image: 'https://images.unsplash.com/photo-1616366335382-52f6ab60e6d1?w=400&h=400&fit=crop',
        featured: false,
        discount: 5
    },
    {
        id: 17,
        name: 'Business Call Earbuds',
        category: 'earbuds',
        price: 3200,
        image: 'https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=400&h=400&fit=crop',
        featured: true,
        discount: 12
    },
    {
        id: 18,
        name: 'Gaming Earbuds',
        category: 'earbuds',
        price: 4200,
        image: 'https://images.unsplash.com/photo-1633747410149-95fac46303ea?w=400&h=400&fit=crop',
        featured: false,
        discount: 22
    },
    {
        id: 19,
        name: 'Crystal Clear Earbuds',
        category: 'earbuds',
        price: 3600,
        image: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=400&h=400&fit=crop',
        featured: false,
        discount: 8
    },
    {
        id: 20,
        name: 'Ultra Bass Earbuds',
        category: 'earbuds',
        price: 2900,
        image: 'https://images.unsplash.com/photo-1646436668760-fdbf1407d6d6?w=400&h=400&fit=crop',
        featured: false,
        discount: 25
    },

    // HEADPHONES (10)
    {
        id: 21,
        name: 'Studio Monitor Headphones',
        category: 'headphones',
        price: 7800,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
        featured: true,
        discount: 10
    },
    {
        id: 22,
        name: 'Wireless Over-Ear Headphones',
        category: 'headphones',
        price: 6500,
        image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop',
        featured: true,
        discount: 0
    },
    {
        id: 23,
        name: 'Gaming Surround Headphones',
        category: 'headphones',
        price: 5200,
        image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&h=400&fit=crop',
        featured: false,
        discount: 20
    },
    {
        id: 24,
        name: 'Noise Cancelling Premium Headphones',
        category: 'headphones',
        price: 9500,
        image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&h=400&fit=crop',
        featured: true,
        discount: 15
    },
    {
        id: 25,
        name: 'Compact Travel Headphones',
        category: 'headphones',
        price: 3500,
        image: 'https://images.unsplash.com/photo-1484653139552-8219bed51114?w=400&h=400&fit=crop',
        featured: false,
        discount: 12
    },
    {
        id: 26,
        name: 'Bass Boosted DJ Headphones',
        category: 'headphones',
        price: 6800,
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
        featured: false,
        discount: 18
    },
    {
        id: 27,
        name: 'Professional Studio Headphones',
        category: 'headphones',
        price: 8500,
        image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=400&h=400&fit=crop',
        featured: false,
        discount: 8
    },
    {
        id: 28,
        name: 'Comfort Long Wear Headphones',
        category: 'headphones',
        price: 4800,
        image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&h=400&fit=crop',
        featured: true,
        discount: 25
    },
    {
        id: 29,
        name: 'Audiophile Grade Headphones',
        category: 'headphones',
        price: 12000,
        image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop',
        featured: false,
        discount: 5
    },
    {
        id: 30,
        name: 'Bluetooth Retro Headphones',
        category: 'headphones',
        price: 5900,
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=400&fit=crop',
        featured: false,
        discount: 22
    }
];

// ===== GLOBAL VARIABLES =====
let cart = [];
let currentFilter = 'all';
let searchQuery = '';

// ===== DOM ELEMENTS =====
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const productsGrid = document.getElementById('productsGrid');
const featuredProducts = document.getElementById('featuredProducts');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const subtotal = document.getElementById('subtotal');
const totalPrice = document.getElementById('totalPrice');
const contactForm = document.getElementById('contactForm');
const emptyMessage = document.getElementById('emptyMessage');
const toast = document.getElementById('toast');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderProducts();
    renderFeaturedProducts();
    updateCartUI();
});

// ===== HAMBURGER MENU FUNCTIONALITY =====
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    hamburger.classList.remove('active');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// Close sidebar when menu link is clicked
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
});

// ===== CART MODAL FUNCTIONALITY =====
cartBtn.addEventListener('click', () => {
    cartModal.classList.toggle('active');
});

closeCart.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

// ===== FILTER FUNCTIONALITY =====
filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.filter;
        renderProducts();
    });
});

// ===== SEARCH FUNCTIONALITY =====
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderProducts();
});

// ===== RENDER FEATURED PRODUCTS =====
function renderFeaturedProducts() {
    const featured = products.filter(p => p.featured).slice(0, 3);
    
    featuredProducts.innerHTML = featured.map(product => `
        <div class="product-card" style="background: rgba(255,255,255,0.1); color: white;">
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                ${product.discount ? `<div class="product-badge sale">-${product.discount}%</div>` : ''}
            </div>
            <div class="product-body">
                <div class="product-category">${product.category}</div>
                <div class="product-name" style="color: white;">${product.name}</div>
                <div class="product-price" style="color: #fff;">
                    Rs. ${(product.price - (product.price * product.discount / 100)).toLocaleString()}
                    ${product.discount ? `<span class="original-price">Rs. ${product.price.toLocaleString()}</span>` : ''}
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// ===== RENDER PRODUCTS =====
function renderProducts() {
    let filteredProducts = products;

    // Apply category filter
    if (currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === currentFilter);
    }

    // Apply search filter
    if (searchQuery) {
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(searchQuery)
        );
    }

    // Show/hide empty message
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '';
        emptyMessage.style.display = 'block';
        return;
    }

    emptyMessage.style.display = 'none';

    // Render products
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                ${product.discount ? `<div class="product-badge sale">-${product.discount}%</div>` : ''}
            </div>
            <div class="product-body">
                <div class="product-category">${product.category}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-price">
                    Rs. ${(product.price - (product.price * product.discount / 100)).toLocaleString()}
                    ${product.discount ? `<span class="original-price">Rs. ${product.price.toLocaleString()}</span>` : ''}
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// ===== ADD TO CART =====
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price - (product.price * product.discount / 100),
            image: product.image,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(`${product.name} added to cart!`);
}

// ===== REMOVE FROM CART =====
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// ===== UPDATE QUANTITY =====
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

// ===== UPDATE CART UI =====
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items display
    if (cart.length === 0) {
        cartItems.innerHTML = '';
        cartEmpty.style.display = 'block';
    } else {
        cartEmpty.style.display = 'none';
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">Rs. ${item.price.toLocaleString()}</div>
                    <div class="quantity-control">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑️</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update totals
    const subTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    subtotal.textContent = `Rs. ${subTotal.toLocaleString()}`;
    totalPrice.textContent = `Rs. ${subTotal.toLocaleString()}`;
}

// ===== LOCALSTORAGE FUNCTIONS =====
function saveCart() {
    localStorage.setItem('pakshop_cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('pakshop_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// ===== TOAST NOTIFICATION =====
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// ===== CONTACT FORM HANDLING =====
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    if (name && email && message) {
        showToast(`Thank you ${name}! We'll get back to you soon.`);
        contactForm.reset();
    }
});

// ===== CHECKOUT BUTTON =====
document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    showToast('Thank you for your order! Redirecting to payment...');
    setTimeout(() => {
        cartModal.classList.remove('active');
    }, 2000);
});

// ===== CLOSE CART WHEN CLICKING OUTSIDE =====
document.addEventListener('click', (e) => {
    if (!e.target.closest('.cart-modal') && !e.target.closest('.cart-btn')) {
        if (cartModal.classList.contains('active')) {
            cartModal.classList.remove('active');
        }
    }
});
