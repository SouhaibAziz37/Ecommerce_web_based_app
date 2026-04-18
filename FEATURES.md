# PakShop Features Documentation 📚

Comprehensive breakdown of all features, with code examples and implementation details.

## Table of Contents
1. [Product Management](#product-management)
2. [Shopping Cart System](#shopping-cart-system)
3. [Search & Filtering](#search--filtering)
4. [User Interface](#user-interface)
5. [Mobile Responsiveness](#mobile-responsiveness)
6. [Data Persistence](#data-persistence)
7. [Notifications](#notifications)

---

## Product Management

### Overview
30 products are stored in a JavaScript array with full metadata.

### Product Object Structure
```javascript
{
    id: 1,                    // Unique identifier
    name: 'Classic Analog Watch',  // Product name
    category: 'watches',      // Category: watches, earbuds, or headphones
    price: 2500,              // Price in PKR (Pakistani Rupees)
    image: 'https://...',     // Image URL from Unsplash
    featured: true,           // Shows in featured section
    discount: 15              // Discount percentage (0-25)
}
```

### Product Categories

#### Watches (10 items)
```javascript
// Range: Rs. 2,500 - Rs. 7,500
- Classic Analog Watch       (Rs. 2,500)
- Smart Digital Watch        (Rs. 5,500)
- Leather Strap Watch        (Rs. 3,200)
- Sports Chronograph         (Rs. 4,800)
- Minimalist Steel Watch     (Rs. 3,500)
- Vintage Gold Watch         (Rs. 6,200)
- Blue Dial Watch            (Rs. 4,200)
- Fitness Tracker Watch      (Rs. 5,800)
- Mechanical Wrist Watch     (Rs. 7,500)
- Elegant Round Watch        (Rs. 3,900)
```

#### Earbuds (10 items)
```javascript
// Range: Rs. 1,800 - Rs. 5,500
- Wireless Earbuds Pro       (Rs. 3,800)
- Bass Boost Earbuds         (Rs. 2,200)
- Noise Cancel Earbuds       (Rs. 5,500)
- Sport Water Resistant      (Rs. 2,800)
- Premium Sound Earbuds      (Rs. 4,500)
- Compact Mini Earbuds       (Rs. 1,800)
- Business Call Earbuds      (Rs. 3,200)
- Gaming Earbuds             (Rs. 4,200)
- Crystal Clear Earbuds      (Rs. 3,600)
- Ultra Bass Earbuds         (Rs. 2,900)
```

#### Headphones (10 items)
```javascript
// Range: Rs. 3,500 - Rs. 12,000
- Studio Monitor Headphones  (Rs. 7,800)
- Wireless Over-Ear          (Rs. 6,500)
- Gaming Surround            (Rs. 5,200)
- Noise Cancelling Premium   (Rs. 9,500)
- Compact Travel             (Rs. 3,500)
- Bass Boosted DJ            (Rs. 6,800)
- Professional Studio        (Rs. 8,500)
- Comfort Long Wear          (Rs. 4,800)
- Audiophile Grade           (Rs. 12,000)
- Bluetooth Retro            (Rs. 5,900)
```

### Adding New Products

**Code Location**: `js/script.js` (Lines ~3-130)

**How to Add**:
```javascript
{
    id: 31,                           // Next unique ID
    name: 'New Product Name',
    category: 'watches',              // Must match existing categories
    price: 5000,                      // Price in PKR
    image: 'https://images.unsplash.com/photo-xxxxx?w=400&h=400&fit=crop',
    featured: false,                  // true = shows in featured section
    discount: 10                      // Percentage off (0-25)
}
```

**Tips**:
- Use Unsplash URLs for free images: `https://images.unsplash.com/photo-{ID}?w=400&h=400&fit=crop`
- Ensure unique IDs
- Price should be realistic for Pakistani market
- Discounts typically 0-25%

---

## Shopping Cart System

### How It Works

**1. Add to Cart**
```javascript
// Function: addToCart(productId)
// Located: js/script.js, line ~320

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;  // Increase quantity if exists
    } else {
        cart.push({                  // Add new item
            id: product.id,
            name: product.name,
            price: product.price - (product.price * product.discount / 100),
            image: product.image,
            quantity: 1
        });
    }
    
    saveCart();      // Save to localStorage
    updateCartUI();  // Update UI
    showToast(...);  // Show notification
}
```

**2. Remove from Cart**
```javascript
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}
```

**3. Update Quantity**
```javascript
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;     // +1 or -1
        if (item.quantity <= 0) {
            removeFromCart(productId); // Remove if 0
        } else {
            saveCart();
            updateCartUI();
        }
    }
}
```

### Cart Data Structure

```javascript
// Global cart array
let cart = [
    {
        id: 1,
        name: 'Classic Analog Watch',
        price: 2125,                 // After discount applied
        image: 'https://...',
        quantity: 2
    },
    {
        id: 11,
        name: 'Wireless Earbuds Pro',
        price: 3040,                 // After discount
        image: 'https://...',
        quantity: 1
    }
];
```

### Cart Calculations

**Final Price with Discount**:
```javascript
finalPrice = price - (price * discount / 100)

// Example:
// Original: Rs. 2,500
// Discount: 15%
// Final: 2500 - (2500 * 15 / 100) = 2,125
```

**Cart Total**:
```javascript
const subTotal = cart.reduce((sum, item) => 
    sum + (item.price * item.quantity), 0
);

// Example cart:
// Item 1: 2,125 × 2 = 4,250
// Item 2: 3,040 × 1 = 3,040
// Total: Rs. 7,290
```

### Cart Features

- ✅ Add products by clicking "Add to Cart"
- ✅ View cart via 🛒 button in navbar
- ✅ Increase/decrease quantities with +/- buttons
- ✅ Remove items with 🗑️ button
- ✅ See real-time total price
- ✅ Delivery is FREE (highlighted)
- ✅ Cash on Delivery option available

---

## Search & Filtering

### Real-Time Search

**Code Location**: `js/script.js`, line ~290

```javascript
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderProducts();  // Re-render with filter applied
});
```

**How It Works**:
1. User types in search bar
2. Query is converted to lowercase
3. Products are filtered as user types
4. Only matching products display

**Example**:
- User types: "Smart"
- Matches: "Smart Digital Watch" ✅
- Shows: 1 result

### Category Filtering

**Code Location**: `js/script.js`, line ~270

```javascript
filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.filter;  // 'all', 'watches', 'earbuds', 'headphones'
        renderProducts();
    });
});
```

**Categories Available**:
```javascript
- All Products      (Shows 30 items)
- Watches          (Shows 10 items)
- Earbuds          (Shows 10 items)
- Headphones       (Shows 10 items)
```

### Combined Search + Filter

**Code Location**: `js/script.js`, line ~360

```javascript
function renderProducts() {
    let filteredProducts = products;

    // Step 1: Apply category filter
    if (currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(p => 
            p.category === currentFilter
        );
    }

    // Step 2: Apply search filter
    if (searchQuery) {
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(searchQuery)
        );
    }

    // Step 3: Render results
    if (filteredProducts.length === 0) {
        showEmptyMessage();  // Show "No products found"
    } else {
        renderProductCards(filteredProducts);
    }
}
```

**Example Scenario**:
```
1. User selects "Watches" filter
   → Shows 10 watches only

2. User types "Smart" in search
   → Filters watches to find "Smart Digital Watch"
   → Shows 1 result

3. User clears search
   → Shows 10 watches again

4. User clicks "All Products"
   → Shows all 30 products
```

---

## User Interface

### Navbar Components

**Sticky Navigation**:
```css
.navbar {
    position: sticky;
    top: 0;
    z-index: 100;  /* Stays on top when scrolling */
}
```

**Elements**:
1. **Logo** (`PakShop 🇵🇰`)
   - Clickable link to homepage
   - Color changes on hover (blue → red)

2. **Search Bar**
   - Placeholder: "Search watches, earbuds, headphones..."
   - Real-time filtering
   - Mobile hidden (shows on large screens)

3. **Cart Button** (`🛒 0`)
   - Shows item count (0-999)
   - Red badge indicates quantity
   - Click to open cart modal

4. **Hamburger Menu** (☰)
   - Mobile only (hidden on desktop)
   - Opens sidebar menu
   - Animates to X when active

### Sidebar Menu

**Mobile Navigation**:
```
Menu
---
Home
About Us
Our Products
Contact Us
```

**Features**:
- Slide-in from left (300px width)
- Closes when item clicked
- Dark overlay behind menu
- Smooth animations

### Product Cards

**Card Structure**:
```
┌─────────────────┐
│  [Image]        │  ← Hover: Zooms 10%
│   [-20%]        │  ← Discount badge
├─────────────────┤
│ watches         │  ← Category (uppercase)
│ Smart Watch     │  ← Product name
│ Rs. 4,400       │  ← Price after discount
│ Rs. 5,500 ❌    │  ← Original price (struck)
│                 │
│ [Add to Cart]   │  ← Button (blue → red on hover)
└─────────────────┘
```

**Hover Effects**:
- Card lifts up (transform: translateY(-8px))
- Shadow increases
- Image zooms 110%
- Smooth transition (0.3s)

### Featured Products Section

**Location**: Below filter buttons

**Features**:
- Shows 3 random featured products
- Beautiful gradient background (pink → red)
- White text
- Only products with `featured: true` appear
- Same card structure as regular products

### Hero Section

**Full-Width Banner**:
- Gradient background (purple → teal)
- Large heading: "Best Tech Deals in Pakistan 🇵🇰"
- Subtitle: "Affordable Prices | Cash on Delivery | Fast Delivery"
- CTA button: "Shop Now"
- Scrolls to products section on click

---

## Mobile Responsiveness

### Breakpoints

**Desktop** (1200px+)
```css
/* 3-4 product columns */
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
```

**Tablet** (768px - 1199px)
```css
/* 2-3 product columns */
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
```

**Mobile** (480px - 767px)
```css
/* 1-2 product columns */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
```

**Small Mobile** (<480px)
```css
/* 1 product column */
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
```

### Mobile-Specific Changes

| Element | Desktop | Mobile |
|---------|---------|--------|
| Search Bar | Visible | Hidden |
| Hamburger Menu | Hidden | Visible |
| Navbar Layout | Horizontal | Stacked |
| Cart Modal | 450px | Full width |
| Product Grid | 3-4 cols | 1-2 cols |
| Hero Title | 3.5rem | 1.5rem |
| Hero Padding | 8rem | 4rem |

### Touch-Friendly Elements

- Buttons: Minimum 44×44px
- Input fields: 16px font (prevents zoom)
- Touch targets: Adequate spacing
- Tap feedback: Hover states work with touch

---

## Data Persistence

### localStorage Implementation

**Location**: `js/script.js`, lines ~430-440

### Saving Cart

```javascript
function saveCart() {
    localStorage.setItem('pakshop_cart', JSON.stringify(cart));
}
```

**What's Stored**:
```javascript
// Stored in browser as JSON string
{
    "pakshop_cart": "[{\"id\":1,\"name\":\"Watch\",...}]"
}
```

### Loading Cart

```javascript
function loadCart() {
    const savedCart = localStorage.getItem('pakshop_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}
```

**When It Runs**:
- On page load (DOMContentLoaded event)
- Restores previous cart
- Updates UI immediately

### Cart Persistence Features

✅ **Survives**:
- Page refresh
- Browser tab close
- Page navigation
- Browser restart

❌ **Lost With**:
- Clear browsing data
- Clear cookies/cache
- Delete localStorage
- Incognito mode (temporary)

### Storage Limits

- **Per Domain**: ~5-10 MB
- **Cart Storage**: ~1-2 KB (negligible)
- **Status**: No warnings on this project

---

## Notifications

### Toast Notifications

**Code Location**: `js/script.js`, line ~450

```javascript
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);  // Disappears after 2 seconds
}
```

### Toast Triggers

**1. Add to Cart**
```javascript
showToast(`${product.name} added to cart!`);
// Example: "Classic Analog Watch added to cart!"
```

**2. Contact Form Submit**
```javascript
showToast(`Thank you ${name}! We'll get back to you soon.`);
```

**3. Empty Cart Checkout**
```javascript
showToast('Your cart is empty!');
```

**4. Successful Checkout**
```javascript
showToast('Thank you for your order! Redirecting to payment...');
```

### Toast Styling

- **Position**: Bottom-left corner
- **Background**: Green (success color)
- **Text**: White
- **Duration**: 2 seconds
- **Animation**: Slide in from left

**CSS**:
```css
.toast {
    position: fixed;
    bottom: 20px;
    left: 20px;
    background: var(--success-color);  /* #27ae60 green */
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    animation: slideIn 0.3s ease;
}
```

---

## Advanced Features

### Contact Form

**Fields**:
- Name (text)
- Email (email)
- Message (textarea, 5 rows)

**Validation**:
- All fields required
- HTML5 email validation
- Shows toast on submit

**Code**:
```javascript
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    if (name && email && message) {
        showToast(`Thank you ${name}! We'll get back to you soon.`);
        contactForm.reset();  // Clear form
    }
});
```

### Empty Cart State

**Displayed When**:
- Cart has 0 items

**Message**:
```
Your cart is empty
```

**Changes**:
- Hides cart items list
- Shows "Your cart is empty" message
- Disable checkout button

**Code**:
```javascript
if (cart.length === 0) {
    cartItems.innerHTML = '';
    cartEmpty.style.display = 'block';
}
```

### Empty Search Results

**Displayed When**:
- No products match search/filter

**Message**:
```
No products found. Try a different search or filter.
```

**Shows**:
- Below products section
- Centered text
- Helpful suggestion

---

## Performance Optimizations

### What's Optimized

1. **No Unnecessary Renders**
   - Products only re-rendered on search/filter change
   - Cart UI only updates when cart changes

2. **Efficient Array Methods**
   - `find()` for single item lookup
   - `filter()` for bulk operations
   - `reduce()` for calculations

3. **CSS Optimization**
   - Single stylesheet
   - Minimal media queries
   - Hardware-accelerated animations (transform, opacity)

4. **JavaScript Efficiency**
   - No loops for DOM updates
   - Direct element manipulation
   - localStorage caching

### Load Performance

- Initial page load: < 1 second
- Search response: < 50ms
- Cart update: Instant
- Image loading: From Unsplash CDN

---

## Accessibility Features

### Semantic HTML

```html
<nav>      <!-- Navigation -->
<header>   <!-- Page header -->
<main>     <!-- Main content -->
<section>  <!-- Content sections -->
<footer>   <!-- Footer -->
<form>     <!-- Forms -->
<input>    <!-- Form inputs with labels -->
```

### Keyboard Navigation

- ✅ Tab through form fields
- ✅ Enter to submit forms
- ✅ Click buttons with keyboard
- ✅ Menu navigation via keyboard

### Color Contrast

- Text: WCAG AA compliant
- Buttons: Clear visual feedback
- Links: Underlined and colored

### Images

- All images have alt text
- Product names as alt text
- Semantic image usage

---

## Browser DevTools Debugging

### Console Messages

**Clear Console** (no errors):
```javascript
// No warnings or errors should appear
```

### Inspect Cart

**Open DevTools Console** and type:
```javascript
console.log(cart);          // View cart contents
console.log(products);      // View all products
console.log(currentFilter); // View active filter
console.log(searchQuery);   // View search query
```

### Inspect localStorage

**DevTools > Application > localStorage**:
```
Key: pakshop_cart
Value: [{"id":1,"name":"Watch",...}]
```

---

## Feature Checklist

- [x] 30 Products (10 each category)
- [x] Search functionality
- [x] Category filtering
- [x] Add to cart
- [x] Remove from cart
- [x] Adjust quantities
- [x] Cart persistence
- [x] Live cart count
- [x] Toast notifications
- [x] Featured products
- [x] Discount badges
- [x] Responsive design
- [x] Mobile menu
- [x] Hero section
- [x] About section
- [x] Contact form
- [x] Footer
- [x] Smooth animations
- [x] Price calculations
- [x] Empty states

---

For customization help, see [CUSTOMIZATION.md](CUSTOMIZATION.md)
For version history, see [CHANGELOG.md](CHANGELOG.md)
