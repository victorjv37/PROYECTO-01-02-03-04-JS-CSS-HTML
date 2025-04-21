import { products } from '../data/products.js';

function renderProductDetail(appElement, productId) {
  const id = parseInt(productId, 10); // Ensure ID is a number
  const product = products.find(p => p.id === id);

  if (!product) {
    appElement.innerHTML = `
      <div class="product-detail-container not-found">
        <a href="#products" class="back-button">&larr; Volver a Productos</a>
        <h2>Producto no encontrado</h2>
        <p>Lo sentimos, no pudimos encontrar el producto que buscas.</p>
      </div>
    `;
    return;
  }

  appElement.innerHTML = `
    <div class="product-detail-container">
      <a href="#products" class="back-button">&larr; Volver a Productos</a>
      <div class="product-detail-content">
        <div class="product-detail-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-detail-info">
          <h1>${product.name}</h1>
          <p class="product-description">${product.description}</p>
          <div class="price-info-detail">
            <span class="current-price-detail">$${product.price}</span>
            ${product.originalPrice ? `<span class="original-price-detail">$${product.originalPrice}</span>` : ''}
            ${product.discount ? `<span class="discount-detail">-${product.discount}%</span>` : ''}
          </div>
          <button class="add-to-cart-button">Añadir al carrito</button> 
          </div>
      </div>
    </div>
  `;

  // Add event listener for the Add to Cart button (example)
  const addToCartButton = appElement.querySelector('.add-to-cart-button');
  addToCartButton?.addEventListener('click', () => {
    console.log(`Added product ${product.id} (${product.name}) to cart.`);
    alert(`${product.name} añadido al carrito (simulado).`);
    // Add actual cart logic here
  });
}

export default renderProductDetail; 