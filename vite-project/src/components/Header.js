export default function Header(parentElement) {
  const headerElement = document.createElement('header');
  // Add a container for flex layout
  headerElement.innerHTML = `
    <div class="header-container">
      <div class="logo-title">Fusion Web</div>
      <nav>
        <ul>
          <li><a href="#home" data-page="home">Inicio</a></li>
          <li><a href="#products" data-page="products">Productos</a></li>
          <li><a href="#gallery" data-page="gallery">Galería</a></li>
          <li><a href="#portfolio" data-page="portfolio">Portafolio</a></li>
        </ul>
      </nav>
    </div>
  `;
  parentElement.appendChild(headerElement);
  return headerElement; // Return the element for potential event handling
} 