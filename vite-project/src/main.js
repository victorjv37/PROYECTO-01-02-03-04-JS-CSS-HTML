// Import Base and Layout Styles
import './styles/global.css';
import './styles/layout.css';

// Import Page-Specific Styles
import './styles/home.css';
import './styles/products.css';
import './styles/gallery.css';
import './styles/productDetail.css';
import './styles/portfolio.css'; // Add import for portfolio styles
// import './styles/portfolio.css'; // Add when created

import renderHome from './pages/home.js'

// Import Components
import Header from './components/Header.js'
import Footer from './components/Footer.js'

// Import Page Renderers
import renderProducts from './pages/products.js'
import renderGallery from './pages/gallery.js'
import renderPortfolio from './pages/portfolio.js'
import renderProductDetail from './pages/productDetail.js'

document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.getElementById('header-container')
  const app = document.getElementById('app')
  const footerContainer = document.getElementById('footer-container')

  if (!headerContainer || !app || !footerContainer) {
    console.error('Essential layout containers not found!')
    return
  }

  // Render Header and Footer
  const headerElement = Header(headerContainer)
  Footer(footerContainer)

  // Define routes
  const routes = {
    home: renderHome,
    products: renderProducts,
    gallery: renderGallery,
    portfolio: renderPortfolio,
  }

  // Simple Router Function
  const router = () => {
    const hash = window.location.hash.substring(1)
    let pageName = 'home'
    let productId = null

    // Check for product detail route
    if (hash.startsWith('product-detail/')) {
      const parts = hash.split('/')
      if (parts.length === 2 && parts[1]) {
        pageName = 'product-detail'
        productId = parts[1]
      } else {
        // Invalid detail hash, fallback to home or products
        pageName = 'products'
      }
    } else if (routes[hash]) {
      // Check for standard routes
      pageName = hash
    } // else remains 'home'

    app.innerHTML = '' // Clear previous content

    // Render based on pageName
    if (pageName === 'product-detail') {
      renderProductDetail(app, productId)
      // Detail page specific logic if needed
    } else {
      const renderPage = routes[pageName]
      if (renderPage) {
        renderPage(app)
      }
    }

    // Optional: Update active link style in header
    updateActiveLink(pageName === 'product-detail' ? 'products' : pageName)
  }

  const updateActiveLink = (activePage) => {
    const links = headerElement.querySelectorAll('nav a')
    links.forEach(link => {
      if (link.dataset.page === activePage) {
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      }
    })
  }

  // Event Listener for Navigation Links
  headerElement.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && event.target.dataset.page) {
      // No need to preventDefault if using hash routing
      // The hashchange event will trigger the router
      // For non-hash routing, you would use: event.preventDefault(); router(event.target.dataset.page);
    }
  })

  // Event Listener for Hash Changes (handles back/forward buttons and direct hash URL entry)
  window.addEventListener('hashchange', router)

  // Initial Page Load
  router() // Load page based on initial hash or default to home
})
