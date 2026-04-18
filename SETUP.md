# PakShop Setup Guide 🚀

Complete step-by-step installation and setup instructions for PakShop.

## Table of Contents
1. [System Requirements](#system-requirements)
2. [Installation Methods](#installation-methods)
3. [Project Structure](#project-structure)
4. [Verification](#verification)
5. [Running Locally](#running-locally)
6. [Deployment](#deployment)
7. [Troubleshooting](#troubleshooting)

---

## System Requirements

### Minimum Requirements
- **Operating System**: Windows, Mac, or Linux
- **Browser**: Any modern browser (Chrome, Firefox, Safari, Edge)
- **Disk Space**: ~50 MB (including documentation)
- **Internet**: Required for images (Unsplash CDN)

### Recommended Setup
- **Browser**: Chrome 90+ or Firefox 88+
- **Text Editor**: Visual Studio Code, Sublime Text, or similar
- **Optional**: Node.js (for local server)

### Browser Compatibility
| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Full Support |
| Firefox | 88+ | ✅ Full Support |
| Safari | 14+ | ✅ Full Support |
| Edge | 90+ | ✅ Full Support |
| IE 11 | Latest | ⚠️ Limited (CSS Grid) |

---

## Installation Methods

### Method 1: Direct Browser (Easiest)

**Time Required**: 2 minutes
**Difficulty**: Beginner
**Requirements**: No setup needed

1. **Download Files**
   - Download `index.html`
   - Download folder `css/` with `style.css`
   - Download folder `js/` with `script.js`

2. **Create Folder**
   ```
   My Projects/
   └── PakShop/
       ├── index.html
       ├── css/
       │   └── style.css
       └── js/
           └── script.js
   ```

3. **Open in Browser**
   - Navigate to PakShop folder
   - Double-click `index.html`
   - Website opens immediately
   - No installation needed!

**Pros**:
- ✅ No setup required
- ✅ No server needed
- ✅ Works offline (images from cache)

**Cons**:
- ❌ Must have internet for images
- ❌ Limited debugging capabilities

---

### Method 2: Local Server (Recommended)

**Time Required**: 5-10 minutes
**Difficulty**: Beginner-Intermediate
**Requirements**: Python or Node.js

#### Option A: Python (Easiest)

1. **Check Python Installation**
   ```bash
   python --version
   # or
   python3 --version
   ```

2. **Navigate to Project**
   ```bash
   cd path/to/PakShop
   ```

3. **Start Server**
   ```bash
   # Python 3
   python3 -m http.server 8000

   # Python 2 (older)
   python -m SimpleHTTPServer 8000
   ```

4. **Access Website**
   - Open browser
   - Go to: `http://localhost:8000`
   - View website with full functionality

5. **Stop Server**
   - Press `Ctrl + C` in terminal

#### Option B: Node.js

1. **Install Node.js**
   - Download from: https://nodejs.org/
   - Use LTS (Long Term Support) version

2. **Verify Installation**
   ```bash
   node --version
   npm --version
   ```

3. **Install HTTP Server**
   ```bash
   npm install -g http-server
   ```

4. **Start Server**
   ```bash
   cd path/to/PakShop
   http-server
   # or
   http-server -p 8000
   ```

5. **Access Website**
   - Open: `http://localhost:8000`
   - or `http://localhost:8080` (default)

#### Option C: Live Server (VS Code)

1. **Install Extension**
   - Open VS Code
   - Extensions tab
   - Search "Live Server"
   - Click Install (by Ritwick Dey)

2. **Start Server**
   - Right-click `index.html`
   - Select "Open with Live Server"
   - Browser opens automatically

3. **Auto-Refresh**
   - Changes to files auto-refresh
   - Great for development

**Pros**:
- ✅ Professional setup
- ✅ Better debugging
- ✅ Auto-refresh available
- ✅ More realistic environment

**Cons**:
- ❌ Requires tool installation
- ❌ More complex setup

---

### Method 3: GitHub Pages (Cloud Hosting)

**Time Required**: 5 minutes
**Difficulty**: Beginner
**Requirements**: GitHub account

1. **Create GitHub Account**
   - Go to: https://github.com
   - Sign up free

2. **Create Repository**
   - Click "New" (+ icon)
   - Name: `pakshop` (or preferred name)
   - Make it Public
   - Click "Create repository"

3. **Upload Files**
   ```bash
   # Using Git (if installed)
   cd PakShop
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/pakshop.git
   git push -u origin main
   ```

   Or use GitHub web interface:
   - Click "Upload files"
   - Drag and drop your files
   - Commit changes

4. **Enable Pages**
   - Go to Settings
   - Scroll to "GitHub Pages"
   - Source: Select "main" branch
   - Click Save
   - Website is live!

5. **Access Website**
   - URL: `https://YOUR_USERNAME.github.io/pakshop`
   - Share this link anywhere

**Pros**:
- ✅ Free hosting
- ✅ Publicly accessible
- ✅ Auto-updates when you push code
- ✅ Professional looking URL

**Cons**:
- ❌ Requires GitHub knowledge
- ❌ Internet required

---

### Method 4: Web Host Deployment

**Time Required**: 15-30 minutes
**Difficulty**: Intermediate
**Requirements**: Web hosting account

#### Popular Hosts
- **Hostinger** (Cheap, Pakistani friendly)
- **Bluehost** (Easy setup)
- **SiteGround** (Good support)
- **Vercel** (Free for static sites)
- **Netlify** (Easy deployment)

#### General Steps

1. **Choose Host & Plan**
   - Select hosting provider
   - Choose appropriate plan
   - Register domain (optional)

2. **Upload Files**
   ```
   Using FTP/SFTP:
   - Download FileZilla or similar
   - Connect using host credentials
   - Upload PakShop files to public_html/
   ```

3. **Access Website**
   - Your domain or host URL
   - Website is live!

4. **SSL Certificate**
   - Enable HTTPS (usually free)
   - Protects user data

---

## Project Structure

### Complete Directory Layout

```
PakShop/
│
├── index.html                 # Main HTML file (9.5 KB)
│   ├── <head> section        # Meta tags, title, links
│   ├── <nav> navbar          # Navigation & search
│   ├── <main> sections       # Hero, products, about, contact
│   └── Footer                # Copyright info
│
├── css/
│   └── style.css             # All styles (19 KB)
│       ├── Variables         # Color scheme, sizes
│       ├── Base styles       # HTML elements
│       ├── Navbar            # Navigation styles
│       ├── Sidebar           # Mobile menu
│       ├── Hero section      # Banner
│       ├── Products          # Grid layouts
│       ├── Cart              # Cart modal
│       ├── Sections          # About, contact, footer
│       ├── Animations        # Keyframes, transitions
│       └── Media queries     # Responsive design
│
├── js/
│   └── script.js             # All JavaScript (18 KB)
│       ├── Products array    # Product database (30 items)
│       ├── DOM elements      # Element references
│       ├── Initialization    # DOMContentLoaded
│       ├── Menu functions    # Hamburger, sidebar
│       ├── Cart functions    # Add, remove, update
│       ├── Search & filter   # Rendering logic
│       ├── localStorage      # Persistence
│       ├── Notifications     # Toast messages
│       └── Event listeners   # User interactions
│
├── README.md                 # Project overview
├── FEATURES.md              # Feature documentation
├── CUSTOMIZATION.md         # Customization guide
├── CHANGELOG.md             # Version history
├── LICENSE.md               # MIT License
└── SETUP.md                # This file

```

### File Purposes

| File | Size | Purpose |
|------|------|---------|
| index.html | 9.5 KB | Structure & content |
| style.css | 19 KB | Visual styling & layout |
| script.js | 18 KB | Functionality & interactions |
| README.md | ~5 KB | Quick start guide |
| FEATURES.md | ~8 KB | Feature details |
| CUSTOMIZATION.md | ~10 KB | Modification guide |
| CHANGELOG.md | ~6 KB | Version history |
| LICENSE.md | ~2 KB | Legal info |

**Total Size**: ~77 KB (very lightweight!)

---

## Verification

### Verify Installation

After setup, test these features:

**1. Load Page**
- [ ] Page loads without errors
- [ ] All text is visible
- [ ] Images display correctly
- [ ] Navbar is sticky

**2. Responsive Design**
- [ ] Desktop view (1200px+): 3-4 columns
- [ ] Tablet view (768px): 2-3 columns
- [ ] Mobile view (<768px): Hamburger menu appears
- [ ] Menu opens/closes smoothly

**3. Search Functionality**
- [ ] Type in search bar
- [ ] Products filter in real-time
- [ ] Typing "Smart" shows only smart watch
- [ ] Clear search shows all products

**4. Filter Buttons**
- [ ] Click "Watches" → shows 10 watches
- [ ] Click "Earbuds" → shows 10 earbuds
- [ ] Click "Headphones" → shows 10 headphones
- [ ] Click "All" → shows all 30 products
- [ ] Active button is highlighted

**5. Shopping Cart**
- [ ] Click "Add to Cart" on any product
- [ ] Toast notification appears
- [ ] Cart count increases in navbar
- [ ] Click cart icon (🛒) → modal opens
- [ ] Item appears in cart with price
- [ ] Close cart with ✕ button

**6. Cart Operations**
- [ ] Click + button → quantity increases
- [ ] Click - button → quantity decreases
- [ ] Click 🗑️ button → item removed
- [ ] Cart summary shows correct total
- [ ] Clear cart → shows "Your cart is empty"

**7. Persistence**
- [ ] Add items to cart
- [ ] Refresh page (F5)
- [ ] Items still in cart ✓
- [ ] Quantity preserved ✓

**8. Navigation**
- [ ] Click menu items → page scrolls to section
- [ ] Logo link → returns to home
- [ ] Links work without errors

**9. Console Check**
- [ ] Press F12 → DevTools open
- [ ] Click "Console" tab
- [ ] No red errors ✓
- [ ] No warnings ✓

**10. Forms**
- [ ] Contact form accepts input
- [ ] Submit triggers notification
- [ ] Form clears after submit

---

## Running Locally

### Development Workflow

**1. Setup Development Environment**

```bash
# Create project folder
mkdir PakShop
cd PakShop

# Copy files into folder
# (index.html, css/, js/)

# Start local server
python3 -m http.server 8000
```

**2. Edit Files**

```
Using VS Code:
1. Open PakShop folder
2. Edit index.html (structure)
3. Edit css/style.css (styling)
4. Edit js/script.js (functionality)
```

**3. Test Changes**

```bash
# Browser auto-refresh or:
1. Save file (Ctrl+S)
2. Refresh browser (F5 or Ctrl+R)
3. See changes immediately
```

**4. Debug Issues**

```bash
# Open DevTools (F12)
1. Console tab → Check for errors
2. Elements tab → Inspect HTML
3. Sources tab → Debug JavaScript
4. Network tab → Check image loads
```

### Best Practices

✅ **Do**:
- Test in multiple browsers
- Use responsive design mode (F12)
- Clear cache when making changes
- Keep backup of original files
- Use version control (Git)

❌ **Don't**:
- Edit files while browser is open (without refresh)
- Delete files without backup
- Ignore console errors
- Skip responsive testing

---

## Deployment

### Pre-Deployment Checklist

- [ ] All features tested locally
- [ ] No console errors
- [ ] Responsive design verified
- [ ] Contact form works
- [ ] Cart persists after refresh
- [ ] All images load
- [ ] Links work correctly
- [ ] Performance acceptable

### Production Deployment

**1. Optimize Images**
- Use TinyPNG to compress
- Ensure URL format correct

**2. Minify Code** (Optional)
- Minify CSS and JS
- Reduces file size

**3. Enable HTTPS**
- Use SSL certificate
- Required for security

**4. CDN Optimization**
- Images from Unsplash (fast)
- Already optimized

**5. Set Proper Headers**
- Cache control
- Compression enabled

**6. Monitor Performance**
- Use PageSpeed Insights
- Check load times

---

## Troubleshooting

### Issue: Blank Page

**Solution**:
```
1. Verify file paths:
   - css/style.css (capital C in css folder)
   - js/script.js (capital J in js folder)

2. Check console (F12):
   - Red errors = file path issue
   - Fix path in index.html links

3. Verify file structure:
   PakShop/
   ├── index.html
   ├── css/
   │   └── style.css
   └── js/
       └── script.js
```

### Issue: Styles Not Loading

**Solution**:
```
1. Open DevTools (F12)
2. Network tab
3. Check if style.css loads (200 status)
4. If 404 error:
   - Wrong file path
   - File not in css/ folder
   - Wrong capitalization

Fix: Ensure exact path:
<link rel="stylesheet" href="css/style.css">
```

### Issue: Script Not Running

**Solution**:
```
1. Check console (F12) for errors
2. Verify file path: js/script.js
3. Ensure script tag at bottom of HTML:
   <script src="js/script.js"></script>
4. Wait for page load before interactions
```

### Issue: Images Not Showing

**Solution**:
```
1. Check internet connection
2. Verify Unsplash working:
   - Visit unsplash.com
   - Download an image manually

3. If still broken:
   - Replace image URLs
   - Use local image files instead
   - Upload images to server

4. Update image paths in js/script.js:
   image: 'https://your-server.com/images/product.jpg'
```

### Issue: Cart Not Persisting

**Solution**:
```
1. Check browser settings:
   - localStorage not disabled
   - Cookies enabled
   - Private/Incognito mode off (doesn't persist)

2. Open DevTools (F12):
   - Application tab
   - localStorage
   - Look for 'pakshop_cart' key

3. If missing:
   - Add item to cart
   - Refresh page
   - Should still be there

4. Clear data and try again:
   - DevTools > Application
   - Clear storage
   - Add items again
```

### Issue: Mobile Menu Not Working

**Solution**:
```
1. Test on actual mobile:
   - Or use DevTools mobile mode (F12)
   
2. Hamburger menu missing?
   - Check responsive breakpoint
   - Under 768px width

3. Menu not closing?
   - Check JavaScript errors
   - Verify event listeners loaded

4. Try different browser:
   - Chrome, Firefox, Safari
   - Identify issue
```

### Issue: Search Not Working

**Solution**:
```
1. Check console for errors (F12)

2. Try typing in search bar:
   - Should filter instantly
   - No button needed

3. If not working:
   - Verify products array loaded
   - Check JavaScript console
   - Try page refresh

4. Reset filters:
   - Click "All Products" button
   - Try search again
```

### Issue: Performance Slow

**Solution**:
```
1. Check connection speed
   - Images from Unsplash
   - Internet dependent

2. Clear browser cache:
   - DevTools > Network
   - Uncheck cache
   - Refresh

3. Close other tabs:
   - Uses browser memory
   - Frees up resources

4. Try different browser:
   - Chrome is fastest
   - Firefox good too
   - Safari for Mac
```

### Can't Find Error?

**Steps**:
1. Check DevTools Console (F12)
2. Read error messages carefully
3. Search error online
4. Check FEATURES.md for details
5. Review code comments
6. Test one feature at a time

---

## Getting Help

### Documentation
- **README.md** - Quick start
- **FEATURES.md** - Feature details
- **CUSTOMIZATION.md** - How to modify
- **CHANGELOG.md** - Version history

### Online Resources
- **MDN Web Docs**: https://developer.mozilla.org/
- **W3Schools**: https://w3schools.com/
- **Stack Overflow**: https://stackoverflow.com/

### Contact
- **Email**: support@pakshop.pk
- **GitHub**: Create an issue
- **Local Help**: Ask in developer communities

---

## Next Steps

1. **Install** using one of the methods above
2. **Verify** all features work
3. **Customize** for your needs (see CUSTOMIZATION.md)
4. **Deploy** when ready (see Deployment section)
5. **Maintain** and update regularly

---

## Quick Reference Commands

```bash
# Python Server
python3 -m http.server 8000

# Node.js Server
npm install -g http-server
http-server

# Git Clone (if on GitHub)
git clone https://github.com/username/pakshop.git
cd pakshop

# Open in VS Code
code .

# View file structure
tree
# or
ls -la
```

---

**Installation Complete!** 🎉

Your PakShop e-commerce website is ready to use.

For more help, see [README.md](README.md) or [FEATURES.md](FEATURES.md)
