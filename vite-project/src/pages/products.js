import { products } from '../data/products.js';

// State variables (simulated)
let searchInput = '';
let priceRange = { min: 0, max: 1000 };
let appliedPriceRange = { min: 0, max: 1000 };
let showModal = false;
let filteredProducts = [...products]; // Start with all products

function renderProductItem(product) {
  // Update href to use a specific hash for product details
  return `
    <a href="#product-detail/${product.id}" class="product-item-link" data-product-id="${product.id}">
      <div class="product-item">
        <img src="${product.image}" alt="${product.name}" class="product-image" />
        <div class="product-info">
          <h3>${product.name}</h3>
          <div class="price-info">
            <span class="current-price">$${product.price}</span>
            ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
            ${product.discount ? `<span class="discount">-${product.discount}%</span>` : ''}
          </div>
        </div>
      </div>
    </a>
  `;
}

function renderProductList(container) {
  const listElement = container.querySelector('.product-list');
  if (!listElement) return;

  if (filteredProducts.length > 0) {
    listElement.innerHTML = filteredProducts.map(renderProductItem).join('');
  } else {
    listElement.innerHTML = `
      <div class="no-products-message">
        <p>No se encontraron productos que coincidan con tu búsqueda.</p>
        <p>Intenta con otros criterios de búsqueda...</p>
      </div>
    `;
  }
}

function filterProducts() {
  filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchInput.toLowerCase());
    const matchesPrice = product.price >= appliedPriceRange.min && product.price <= appliedPriceRange.max;
    return matchesSearch && matchesPrice;
  });
}

function applyPriceFilter(appElement) {
  appliedPriceRange = { ...priceRange };
  showModal = false;
  filterProducts();
  renderPageContent(appElement); // Re-render the whole page content to update list and modal state
}

function resetFilters(appElement) {
  searchInput = '';
  priceRange = { min: 0, max: 1000 };
  appliedPriceRange = { min: 0, max: 1000 };
  showModal = false;
  filterProducts();
  renderPageContent(appElement); // Re-render
}

function toggleModal(appElement, show) {
  showModal = show;
  renderPageContent(appElement); // Re-render to show/hide modal
}

function renderPageContent(appElement) {
  appElement.innerHTML = `
    <div class="products-container">
      <h1>Nuestros Productos</h1>
      <div class="filters">
        <input
          type="text"
          placeholder="Buscar productos..."
          value="${searchInput}"
          class="search-input"
          id="product-search-input"
        />
        <button class="filter-button" id="open-price-filter-btn">Filtrar por precio</button>
        <button class="reset-button" id="reset-filters-btn">Restablecer</button>
      </div>

      ${showModal ? `
        <div class="modal" id="price-filter-modal">
          <div class="modal-content price-filter">
            <h2>Filtrar por Precio</h2>
            <div class="range-group">
              <label for="min-price-num">Precio mínimo: $${priceRange.min}</label>
              <input
                type="range"
                id="min-price-range"
                value="${priceRange.min}"
                class="range-input"
                min="0"
                max="1000"
              />
               <input
                 type="number"
                 id="min-price-num"
                 value="${priceRange.min}"
                 class="number-input"
                 min="0"
               />
            </div>
            <div class="range-group">
              <label for="max-price-num">Precio máximo: $${priceRange.max}</label>
              <input
                type="range"
                id="max-price-range"
                value="${priceRange.max}"
                class="range-input"
                min="0"
                max="1000"
              />
               <input
                 type="number"
                 id="max-price-num"
                 value="${priceRange.max}"
                 class="number-input"
                 min="0"
               />
            </div>
            <div class="button-group">
              <button class="apply" id="apply-price-filter-btn">Aplicar</button>
              <button class="cancel" id="close-price-filter-btn">Cerrar</button>
            </div>
          </div>
        </div>
      ` : ''}

      <div class="product-list"></div>
    </div>
  `;

  renderProductList(appElement); // Render the initial or filtered list

  // --- Add Event Listeners --- 
  const searchInputEl = appElement.querySelector('#product-search-input');
  const openModalBtn = appElement.querySelector('#open-price-filter-btn');
  const resetFiltersBtn = appElement.querySelector('#reset-filters-btn');

  searchInputEl?.addEventListener('input', (e) => {
    searchInput = e.target.value;
    filterProducts();
    renderProductList(appElement);
  });

  openModalBtn?.addEventListener('click', () => toggleModal(appElement, true));
  resetFiltersBtn?.addEventListener('click', () => resetFilters(appElement));

  if (showModal) {
    const closeModalBtn = appElement.querySelector('#close-price-filter-btn');
    const applyFilterBtn = appElement.querySelector('#apply-price-filter-btn');
    const minPriceRangeEl = appElement.querySelector('#min-price-range');
    const maxPriceRangeEl = appElement.querySelector('#max-price-range');
    const minPriceNumEl = appElement.querySelector('#min-price-num');
    const maxPriceNumEl = appElement.querySelector('#max-price-num');
    const modal = appElement.querySelector('#price-filter-modal');

    closeModalBtn?.addEventListener('click', () => toggleModal(appElement, false));
    applyFilterBtn?.addEventListener('click', () => applyPriceFilter(appElement));
    
    // Close modal if clicking outside the content
    modal?.addEventListener('click', (e) => {
       if (e.target === modal) {
           toggleModal(appElement, false);
       }
    });

    const updatePriceRange = (type, value) => {
      const val = Number(value);
      priceRange = { ...priceRange, [type]: val };
      // Keep sliders synchronized and prevent crossing
      if (type === 'min' && val > priceRange.max) {
         priceRange.max = val;
      }
      if (type === 'max' && val < priceRange.min) {
         priceRange.min = val;
      }
      // Update UI elements directly without full re-render for smoother slider updates
      if(minPriceRangeEl) minPriceRangeEl.value = priceRange.min;
      if(maxPriceRangeEl) maxPriceRangeEl.value = priceRange.max;
      if(minPriceNumEl) minPriceNumEl.value = priceRange.min;
      if(maxPriceNumEl) maxPriceNumEl.value = priceRange.max;
      // Update labels dynamically
      const minLabel = appElement.querySelector('label[for="min-price-num"]');
      const maxLabel = appElement.querySelector('label[for="max-price-num"]');
      if(minLabel) minLabel.textContent = `Precio mínimo: $${priceRange.min}`;
      if(maxLabel) maxLabel.textContent = `Precio máximo: $${priceRange.max}`;
    };

    minPriceRangeEl?.addEventListener('input', (e) => updatePriceRange('min', e.target.value));
    maxPriceRangeEl?.addEventListener('input', (e) => updatePriceRange('max', e.target.value));
    minPriceNumEl?.addEventListener('input', (e) => updatePriceRange('min', e.target.value));
    maxPriceNumEl?.addEventListener('input', (e) => updatePriceRange('max', e.target.value));
  }
}

// Export the main render function for this page
export default function renderProducts(appElement) {
  // Reset state when navigating to the page (optional, depends on desired behavior)
  // searchInput = '';
  // priceRange = { min: 0, max: 1000 };
  // appliedPriceRange = { min: 0, max: 1000 };
  // showModal = false;
  filterProducts(); // Ensure initial filter is applied
  renderPageContent(appElement);
} 