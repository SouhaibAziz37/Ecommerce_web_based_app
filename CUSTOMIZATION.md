# PakShop Customization Guide 🎨

Learn how to customize PakShop for your specific needs.

## Table of Contents
1. [Quick Edits](#quick-edits)
2. [Color Customization](#color-customization)
3. [Content Changes](#content-changes)
4. [Product Management](#product-management)
5. [Advanced Customizations](#advanced-customizations)
6. [Tips & Tricks](#tips--tricks)

---

## Quick Edits

### File to Edit: `index.html`

The HTML file contains all text content that's easy to find and replace.

---

## Color Customization

### Primary Colors (Most Important)

**File**: `css/style.css`
**Location**: Lines 1-10 (`:root` section)

```css
:root {
    --primary-color: #6c63ff;     /* Main blue */
    --secondary-color: #ff6b6b;   /* Red/accent */
    --accent-color: #4ecdc4;      /* Teal */
    --text-primary: #2d3436;      /* Dark text */
    --text-secondary: #636e72;    /* Gray text */
    --border-color: #dfe6e9;      /* Light borders */
    --success-color: #27ae60;     /* Green (cart) */
    --warning-color: #f39c12;     /* Orange (featured) */
}
```

### Change Primary Color

**Before**:
```css
--primary-color: #6c63ff;  /* Purple blue */
```

**After** (Dark blue):
```css
--primary-color: #003d99;  /* Navy blue */
```

**Affects**:
- Buttons (Add to Cart)
- Links
- Badges
- Cart button
- Filter active state

### Change Secondary Color

**Before**:
```css
--secondary-color: #ff6b6b;  /* Red */
```

**After** (Orange):
```css
--secondary-color: #ff9800;  /* Orange */
```

**Affects**:
- Hover states
- Sale badges
- Accents

### Complete Color Scheme Change

**Pakistani National Colors** (Green & White):
```css
:root {
    --primary-color: #1DB954;      /* Pakistani green */
    --secondary-color: #FFB81C;    /* Gold */
    --accent-color: #1a5c3a;       /* Dark green */
    --text-primary: #000000;       /* Black text */
    --text-secondary: #555555;     /* Gray */
    --border-color: #eeeeee;       /* Light gray */
    --success-color: #1DB954;      /* Green (matches primary) */
    --warning-color: #FFB81C;      /* Gold */
}
```

### Luxury Color Scheme (Premium Feel)

```css
:root {
    --primary-color: #1a1a1a;      /* Black */
    --secondary-color: #d4af37;    /* Gold */
    --accent-color: #e8c547;       /* Lighter gold */
    --text-primary: #1a1a1a;       /* Black */
    --text-secondary: #666666;     /* Dark gray */
    --border-color: #cccccc;       /* Light gray */
    --success-color: #d4af37;      /* Gold (matches primary) */
    --warning-color: #e8c547;      /* Light gold */
}
```

### Dark Mode Theme

```css
:root {
    --primary-color: #667eea;      /* Indigo */
    --secondary-color: #764ba2;    /* Purple */
    --accent-color: #f093fb;       /* Pink */
    --text-primary: #ffffff;       /* White */
    --text-secondary: #cccccc;     /* Light gray */
    --border-color: #444444;       /* Dark gray */
    --success-color: #4caf50;      /* Green */
    --warning-color: #ff9800;      /* Orange */
}
```

---

## Content Changes

### Business Name

**Old**: `PakShop 🇵🇰`
**New**: `TechHub Pakistan` or similar

**Files to Edit**:

1. **index.html** (Line ~30)
```html
<div class="logo">
    <a href="#home">PakShop 🇵🇰</a>
</div>
```
Change to:
```html
<div class="logo">
    <a href="#home">TechHub Pakistan 🇵🇰</a>
</div>
```

2. **index.html** (Line ~150)
```html
<h1>Best Tech Deals in Pakistan 🇵🇰</h1>
```

3. **index.html** (Line ~305)
```html
<h2>About PakShop 🇵🇰</h2>
```

4. **index.html** (Line ~333)
```html
<p>&copy; 2024 PakShop 🇵🇰 | All Rights Reserved</p>
```

### Contact Information

**File**: `index.html`

**Email** (Line ~320):
```html
<!-- BEFORE -->
<p><a href="mailto:support@pakshop.pk">support@pakshop.pk</a></p>

<!-- AFTER -->
<p><a href="mailto:info@yourbusiness.pk">info@yourbusiness.pk</a></p>
```

**Phone** (Line ~325):
```html
<!-- BEFORE -->
<p><a href="tel:+923001234567">+92 300 1234567</a></p>

<!-- AFTER -->
<p><a href="tel:+923001111111">+92 300 1111111</a></p>
```

**Location** (Line ~330):
```html
<!-- BEFORE -->
<p>Islamabad, Pakistan</p>

<!-- AFTER -->
<p>Karachi, Pakistan</p>
```

### Hero Section Text

**File**: `index.html` (Lines ~147-150)

```html
<!-- Original -->
<h1>Best Tech Deals in Pakistan 🇵🇰</h1>
<p>Affordable Prices | Cash on Delivery | Fast Delivery</p>

<!-- Custom -->
<h1>Premium Electronics at Your Doorstep 🚚</h1>
<p>Best Prices | Easy Returns | Expert Support</p>
```

### About Section

**File**: `index.html` (Lines ~310-318)

**Original**:
```html
<p>
    PakShop is a Pakistan-based e-commerce platform dedicated to offering 
    high-quality watches, earbuds, and headphones at affordable prices in PKR...
</p>
```

**Custom Example**:
```html
<p>
    ElectroHub is Pakistan's leading online electronics retailer, offering 
    premium watches, earbuds, and headphones with guaranteed quality and 
    reliable customer service...
</p>
```

### Filter Button Text

**File**: `index.html` (Lines ~175-180)

```html
<!-- Current -->
<button class="filter-btn active" data-filter="all">All Products</button>

<!-- Custom -->
<button class="filter-btn active" data-filter="all">Browse All</button>
```

---

## Product Management

### Add New Product

**File**: `js/script.js`
**Location**: Lines 3-130 (products array)

**Step 1**: Find the products array:
```javascript
const products = [
    { id: 1, name: '...', ... },
    // ... more products ...
    { id: 30, name: '...', ... }
];
```

**Step 2**: Add new product before closing bracket:
```javascript
{
    id: 31,
    name: 'New Smart Watch Pro',
    category: 'watches',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    featured: false,
    discount: 10
}
```

**Step 3**: Save file and refresh browser

### Edit Existing Product

**Example**: Update "Classic Analog Watch" price from Rs. 2,500 to Rs. 3,000

```javascript
// BEFORE
{
    id: 1,
    name: 'Classic Analog Watch',
    category: 'watches',
    price: 2500,
    ...
}

// AFTER
{
    id: 1,
    name: 'Classic Analog Watch',
    category: 'watches',
    price: 3000,  // Changed
    ...
}
```

### Remove Product

**Option 1**: Delete entire object
```javascript
// REMOVE THIS ENTIRE BLOCK
{
    id: 5,
    name: 'Minimalist Steel Watch',
    ...
}
```

**Option 2**: Mark as unavailable (hide from display)
```javascript
// Add 'available' field
{
    id: 5,
    name: 'Minimalist Steel Watch',
    available: false,  // Add this
    ...
}

// Then filter in renderProducts()
if (product.available === false) continue;  // Skip this product
```

### Change Discount

**Before**:
```javascript
{
    id: 6,
    name: 'Vintage Gold Watch',
    price: 6200,
    discount: 25  // 25% off
}
```

**After**:
```javascript
{
    id: 6,
    name: 'Vintage Gold Watch',
    price: 6200,
    discount: 15  // 15% off instead
}
```

### Mark as Featured

**Before**:
```javascript
{
    id: 7,
    name: 'Blue Dial Watch',
    featured: false  // Not featured
}
```

**After**:
```javascript
{
    id: 7,
    name: 'Blue Dial Watch',
    featured: true  // Now featured (shows in featured section)
}
```

**Note**: Only 3 featured products show. If you mark 4+ as featured, only first 3 display.

### Change Product Image

**Before**:
```javascript
{
    id: 1,
    name: 'Classic Analog Watch',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop'
}
```

**After** (New Unsplash image):
```javascript
{
    id: 1,
    name: 'Classic Analog Watch',
    image: 'https://images.unsplash.com/photo-1523170643622-43be7c3e3c39?w=400&h=400&fit=crop'
}
```

**Finding Unsplash Images**:
1. Go to https://unsplash.com
2. Search for "watch" (or your product)
3. Click image
4. Copy direct image URL
5. Ensure `?w=400&h=400&fit=crop` at end (for consistency)

### Bulk Product Update

**Example**: Increase all prices by 10%

1. Open `js/script.js`
2. For each product:
   ```javascript
   // Old price: 2500
   // New price: 2500 × 1.10 = 2750
   price: 2750
   ```

3. Or use Find & Replace carefully

### Add Product Metadata

**Current fields**:
```javascript
id, name, category, price, image, featured, discount
```

**Add ratings** (custom):
```javascript
{
    id: 1,
    name: 'Classic Analog Watch',
    category: 'watches',
    price: 2500,
    image: '...',
    featured: true,
    discount: 15,
    rating: 4.5,        // Add this
    reviews: 128        // Add this
}
```

Then update HTML template to show:
```html
<div class="product-rating">
    ⭐ {rating} ({reviews} reviews)
</div>
```

---

## Advanced Customizations

### Change Navbar Style

**Sticky → Fixed**:

**File**: `css/style.css`, line ~72
```css
/* BEFORE */
.navbar {
    position: sticky;
}

/* AFTER */
.navbar {
    position: fixed;
    width: 100%;
}
```

### Add Custom Font

**File**: `index.html` (in `<head>`)

```html
<!-- Add Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

**File**: `css/style.css`, line ~7

```css
body {
    font-family: 'Poppins', 'Segoe UI', sans-serif;  /* Added Poppins */
}
```

### Disable Features

**Disable Search**:
1. Remove search bar from `index.html` (lines ~48-53)
2. Or hide with CSS:
```css
.search-bar {
    display: none !important;
}
```

**Disable Featured Products**:
```javascript
// In js/script.js, comment out:
// renderFeaturedProducts();
```

Or hide with CSS:
```css
.featured-section {
    display: none !important;
}
```

### Modify Animations

**Faster animations**:
```css
/* Default */
--transition: all 0.3s ease;

/* Faster (0.2s) */
--transition: all 0.2s ease;
```

**Disable animations**:
```css
/* Remove all animations */
--transition: all 0s;

/* Or disable specific animations */
@keyframes fadeIn {
    from { opacity: 1; }
    to { opacity: 1; }
}
```

### Change Grid Layout

**Products per row**:

**Current** (280px min):
```css
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
```

**3 columns always**:
```css
grid-template-columns: repeat(3, 1fr);
```

**5 columns on desktop**:
```css
grid-template-columns: repeat(5, 1fr);
```

**Responsive**: Small to large
```css
@media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 480px) {
    grid-template-columns: 1fr;
}
```

---

## Tips & Tricks

### Tip 1: Test Changes Safely

1. **Backup Original Files**
   - Copy original files before editing
   - Save as `backup_style.css`, etc.

2. **Test in Browser**
   - Open DevTools (F12)
   - Make changes
   - Test features

3. **Check Console**
   - Ensure no errors appear
   - Verify cart works

### Tip 2: Use Browser DevTools

**Edit CSS Live**:
1. Open DevTools (F12)
2. Right-click element
3. Click "Inspect"
4. Edit CSS in DevTools
5. Copy working code to `style.css`

**Example**:
```css
/* Live edit in DevTools */
--primary-color: #ff0000;  /* Change to red */
/* See instant preview */
```

### Tip 3: Color Picker Tool

Use online color picker: https://htmlcolorcodes.com/

**Get Colors**:
- Hex: `#6c63ff`
- RGB: `rgb(108, 99, 255)`
- HSL: `hsl(248, 100%, 63%)`

### Tip 4: Image Optimization

**Current**: Unsplash images (high quality)
**Better**: Use optimized images

**Tools**:
- TinyPNG: https://tinypng.com/ (compress)
- Unsplash: https://unsplash.com/ (free high-quality)
- Pexels: https://www.pexels.com/ (free)

### Tip 5: Add Analytics

**Google Analytics**:
1. Create Google Analytics account
2. Copy tracking code
3. Paste before `</head>` in HTML:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Tip 6: Mobile Testing

**Test Responsive Design**:

**Chrome DevTools**:
1. Press F12
2. Click Device Toggle (or Ctrl+Shift+M)
3. Select device (iPhone, iPad, etc.)
4. Test all features

**Real Device**:
1. Same network as computer
2. Find computer IP (ipconfig)
3. Type `http://YOUR_IP:8000` in phone browser
4. Test on actual device

### Tip 7: Performance Check

**Page Speed**:
1. Use PageSpeed Insights: https://pagespeed.web.dev/
2. Upload your site
3. Get recommendations

**Current**: Already optimized (< 50KB total)

### Tip 8: SEO Improvement

**Add Meta Tags** (in `<head>`):
```html
<meta name="description" content="Best tech deals in Pakistan. Shop watches, earbuds, and headphones at affordable prices with Cash on Delivery.">
<meta name="keywords" content="watches, earbuds, headphones, Pakistan, online shopping">
<meta name="author" content="PakShop">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Add Schema Markup** (for Google):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Store",
  "name": "PakShop",
  "image": "logo.png",
  "description": "E-commerce platform for tech products",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Tech Street",
    "addressLocality": "Islamabad",
    "postalCode": "44000",
    "addressCountry": "PK"
  }
}
</script>
```

### Tip 9: Add Loading State

Show loading animation while products load:

**HTML** (add to body):
```html
<div class="loading" id="loading">
    <div class="spinner"></div>
    <p>Loading products...</p>
</div>
```

**CSS**:
```css
.loading {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
}

.spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #6c63ff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
```

### Tip 10: Multi-Language Support

**Add Language Toggle**:

```javascript
const translations = {
    en: {
        addToCart: 'Add to Cart',
        search: 'Search products...'
    },
    ur: {
        addToCart: 'ٹوکری میں شامل کریں',
        search: 'مصنوعات تلاش کریں...'
    }
};
```

Then dynamically update text based on selected language.

---

## Common Mistakes to Avoid

❌ **Don't**:
- Delete closing brackets `}` or `]`
- Mix single `'` and double `"` quotes
- Change variable names (will break code)
- Leave products array empty
- Delete all filter buttons

✅ **Do**:
- Keep file structure intact
- Test after each change
- Keep backups
- Use proper JSON syntax
- Test in multiple browsers

---

## Getting Help

1. **Check FEATURES.md** for how things work
2. **Use Browser DevTools** to debug
3. **Review code comments** in files
4. **Test incrementally** (one change at a time)
5. **Verify JSON syntax** at jsonlint.com

---

For detailed features, see [FEATURES.md](FEATURES.md)
For version history, see [CHANGELOG.md](CHANGELOG.md)
