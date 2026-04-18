# PakShop Quick Reference Card 📋

Essential information at a glance.

---

## File Locations

```
PakShop/
├── index.html              Main HTML file
├── css/style.css          All styling
├── js/script.js           All functionality
│
├── README.md              ← Start here
├── SETUP.md              ← Installation help
├── FEATURES.md           ← Feature details
├── CUSTOMIZATION.md      ← How to modify
├── CHANGELOG.md          ← Version history
└── LICENSE.md            ← Legal info
```

---

## Essential Links

| Purpose | Link |
|---------|------|
| Start Here | [README.md](README.md) |
| Installation | [SETUP.md](SETUP.md) |
| Features | [FEATURES.md](FEATURES.md) |
| Customize | [CUSTOMIZATION.md](CUSTOMIZATION.md) |
| History | [CHANGELOG.md](CHANGELOG.md) |
| License | [LICENSE.md](LICENSE.md) |

---

## Color Palette

```css
Primary (Blue):       #6c63ff
Secondary (Red):      #ff6b6b
Accent (Teal):        #4ecdc4
Success (Green):      #27ae60
Warning (Orange):     #f39c12
Text Dark:            #2d3436
Text Light:           #636e72
Border:               #dfe6e9
Background:           #f8f9fa
```

---

## Quick Code Changes

### Change Primary Color
```css
/* In css/style.css, line 2 */
--primary-color: #6c63ff;  /* Change this */
```

### Change Business Name
```html
<!-- Search and replace in index.html -->
"PakShop 🇵🇰" → "Your Business Name"
```

### Change Contact Info
```html
<!-- In index.html -->
Email:    support@pakshop.pk
Phone:    +92 300 1234567
Location: Islamabad, Pakistan
```

### Add Product
```javascript
// In js/script.js, add to products array:
{
    id: 31,
    name: 'Product Name',
    category: 'watches',
    price: 5000,
    image: 'https://...',
    featured: false,
    discount: 10
}
```

---

## Important Functions

| Function | Purpose | File |
|----------|---------|------|
| `addToCart(id)` | Add item to cart | js/script.js:320 |
| `removeFromCart(id)` | Remove from cart | js/script.js:339 |
| `updateQuantity(id, change)` | Change quantity | js/script.js:349 |
| `renderProducts()` | Display products | js/script.js:360 |
| `showToast(msg)` | Show notification | js/script.js:450 |
| `saveCart()` | Save to storage | js/script.js:430 |
| `loadCart()` | Restore from storage | js/script.js:436 |

---

## CSS Classes to Know

| Class | Purpose | File |
|-------|---------|------|
| `.navbar` | Top navigation | style.css:72 |
| `.sidebar` | Mobile menu | style.css:115 |
| `.product-card` | Product item | style.css:460 |
| `.cart-modal` | Cart panel | style.css:590 |
| `.product-grid` | Products layout | style.css:440 |
| `.filter-btn` | Category button | style.css:360 |
| `.hero` | Banner section | style.css:200 |

---

## Keyboard Shortcuts (DevTools)

| Shortcut | Action |
|----------|--------|
| `F12` | Open DevTools |
| `Ctrl+Shift+I` | Inspect element |
| `Ctrl+Shift+J` | Open Console |
| `Ctrl+Shift+M` | Toggle mobile mode |
| `F5` | Refresh page |
| `Ctrl+R` | Hard refresh |
| `Ctrl+Shift+Delete` | Clear cache |

---

## Command Line

```bash
# Start local server (Python)
python3 -m http.server 8000

# Start local server (Node)
http-server

# Open in browser
http://localhost:8000
```

---

## Browser Console Debugging

```javascript
// View current cart
console.log(cart);

// View all products
console.log(products);

// View search query
console.log(searchQuery);

// View current filter
console.log(currentFilter);

// Test localStorage
localStorage.getItem('pakshop_cart');
localStorage.setItem('test', 'value');
localStorage.clear();
```

---

## Product Categories

| Category | Count | Price Range |
|----------|-------|-------------|
| Watches | 10 | Rs. 2,500 - 7,500 |
| Earbuds | 10 | Rs. 1,800 - 5,500 |
| Headphones | 10 | Rs. 3,500 - 12,000 |
| **Total** | **30** | **Rs. 1,800 - 12,000** |

---

## Responsive Breakpoints

| Device | Width | Columns | Menu |
|--------|-------|---------|------|
| Desktop | 1200px+ | 3-4 | Hidden |
| Tablet | 768px+ | 2-3 | Hidden |
| Mobile | < 768px | 1-2 | Hamburger |
| Small | < 480px | 1 | Hamburger |

---

## localStorage Keys

| Key | Purpose | Format |
|-----|---------|--------|
| `pakshop_cart` | Cart contents | JSON array |

---

## Common Tasks

### Add New Category
1. Add to filter buttons (index.html)
2. Update renderProducts() (js/script.js)
3. Add products to that category

### Change Theme Colors
1. Edit `:root` variables (css/style.css)
2. All colors use CSS variables
3. Dark mode included

### Deploy to Web
1. See SETUP.md → Deployment
2. GitHub Pages (easiest)
3. Or web hosting provider

### Fix Bug
1. Open DevTools (F12)
2. Check Console for errors
3. Review code comments
4. Check documentation

---

## Performance Tips

- Images: Unsplash optimized (fast)
- CSS: 19 KB (minimal)
- JS: 18 KB (lightweight)
- Total: ~46 KB (very small)
- Load time: < 1 second
- No dependencies (fast loading)

---

## SEO Checklist

- [x] Semantic HTML5
- [x] Meta tags
- [x] Mobile responsive
- [x] Fast load time
- [x] Clean URLs
- [ ] Sitemap (optional)
- [ ] Robot.txt (optional)
- [ ] Schema markup (optional)

---

## Security Notes

**Current**:
- Client-side only
- No backend
- No database
- localStorage only

**For Production**:
- Add HTTPS
- Validate inputs
- Add authentication
- Implement payment gateway
- Use database
- Add backend API

---

## File Size Reference

| File | Size | Lines |
|------|------|-------|
| index.html | 9.5 KB | ~250 |
| style.css | 19 KB | ~650 |
| script.js | 18 KB | ~600 |
| README.md | 5 KB | ~200 |
| FEATURES.md | 8 KB | ~300 |
| **Total** | **~48 KB** | **~2,000** |

---

## Browser Testing Checklist

- [ ] Chrome (Windows)
- [ ] Firefox (Windows)
- [ ] Safari (Mac)
- [ ] Edge (Windows)
- [ ] Chrome Mobile
- [ ] Safari Mobile
- [ ] Tablet (iPad)

---

## Feature Checklist

- [x] 30 Products
- [x] Search
- [x] Filter
- [x] Cart
- [x] Persist
- [x] Responsive
- [x] Mobile menu
- [x] Hero section
- [x] About
- [x] Contact
- [x] Notifications
- [x] Featured products
- [x] Discounts

---

## License Info

**Type**: MIT License
**Commercial Use**: ✅ Allowed
**Modification**: ✅ Allowed
**Distribution**: ✅ Allowed
**Liability**: ❌ No warranty
**Attribution**: ⚠️ Recommended

See LICENSE.md for details.

---

## Contact & Support

**Project Help**: See README.md
**Bug Reports**: Check FEATURES.md
**Customization**: See CUSTOMIZATION.md
**Installation**: See SETUP.md

**Email**: support@pakshop.pk
**Location**: Islamabad, Pakistan
**Hours**: Business hours

---

## Version Info

- **Current**: 1.0.0
- **Status**: Stable
- **Released**: 2024-04-18
- **Support**: 1 year
- **Next**: 1.1.0 (Q3 2024)

---

## Quick Checklist Before Deploy

- [ ] Test all features locally
- [ ] No console errors
- [ ] Responsive design verified
- [ ] Images load
- [ ] Cart persists
- [ ] Links work
- [ ] Forms functional
- [ ] Performance acceptable

---

## Useful Resources

- [MDN Web Docs](https://developer.mozilla.org/) - Web standards
- [CSS Tricks](https://css-tricks.com/) - CSS guide
- [JavaScript.info](https://javascript.info/) - JS tutorial
- [Unsplash](https://unsplash.com/) - Free images
- [GitHub Pages](https://pages.github.com/) - Free hosting

---

## Getting Started

1. **Read**: [README.md](README.md) (5 min)
2. **Install**: [SETUP.md](SETUP.md) (10 min)
3. **Explore**: Open in browser (5 min)
4. **Customize**: [CUSTOMIZATION.md](CUSTOMIZATION.md) (varies)
5. **Deploy**: [SETUP.md → Deployment](SETUP.md#deployment) (varies)

**Total**: ~20 minutes to get started! ⚡

---

## FAQ Quick Answers

**Q: Cost?**
A: Free (MIT License)

**Q: Dependencies?**
A: None! Pure vanilla JS

**Q: Can use commercially?**
A: Yes! MIT License allows it

**Q: How customize?**
A: See CUSTOMIZATION.md

**Q: How deploy?**
A: See SETUP.md Deployment section

**Q: How install?**
A: See SETUP.md

**Q: How debug?**
A: Use DevTools (F12)

**Q: Mobile friendly?**
A: Yes, fully responsive

---

## One-Page Architecture

```
┌─────────────────────────────────┐
│      NAVBAR (sticky)            │
│  Logo | Search | Cart | Menu ☰  │
└─────────────────────────────────┘
         ↓
┌─────────────────────────────────┐
│      HERO SECTION              │
│  "Best Tech Deals 🇵🇰"         │
│  [Shop Now Button]              │
└─────────────────────────────────┘
         ↓
┌─────────────────────────────────┐
│      FILTER BUTTONS             │
│  All | Watches | Earbuds |... │
└─────────────────────────────────┘
         ↓
┌─────────────────────────────────┐
│    FEATURED PRODUCTS            │
│  [Card] [Card] [Card]          │
└─────────────────────────────────┘
         ↓
┌─────────────────────────────────┐
│    ALL PRODUCTS (Grid)          │
│  [Card][Card][Card][Card]      │
│  [Card][Card][Card][Card]      │
│  [Card][Card][Card][Card]      │
└─────────────────────────────────┘
         ↓
┌─────────────────────────────────┐
│      ABOUT SECTION              │
│  Company info + Features        │
└─────────────────────────────────┘
         ↓
┌─────────────────────────────────┐
│      CONTACT SECTION            │
│  Form + Contact Info            │
└─────────────────────────────────┘
         ↓
┌─────────────────────────────────┐
│      FOOTER                     │
│  Copyright info                 │
└─────────────────────────────────┘

SIDEBAR (Mobile)
├── Home
├── About
├── Products
└── Contact

CART MODAL (Slide-in)
├── Cart items
├── Summary
└── Checkout
```

---

**Last Updated**: 2024-04-18
**Version**: 1.0.0
**Status**: ✅ Ready to use!

Happy coding! 🚀
