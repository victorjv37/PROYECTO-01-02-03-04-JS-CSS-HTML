export default function renderHome(appElement) {
  appElement.innerHTML = `
    <div class="home">

      <div class="home-header">
        <h2 class="home-title">¡Explora el Mundo <span class="accent">Fusion</span>!</h2>
        <p class="home-description">Descubre una experiencia única donde productos exclusivos, fotografías impactantes y proyectos creativos se fusionan en un solo espacio.</p>
      </div>

      <div class="home-sections">
        <div class="section-card">
          <div class="section-image products-image"></div>
          <div class="section-content">
            <h3>Productos</h3>
            <p>Explora una amplia gama de productos dinámicos.</p>
            <a href="#products" class="section-button">Ver productos</a>
          </div>
        </div>

        <div class="section-card">
          <div class="section-image gallery-image"></div>
          <div class="section-content">
            <h3>Galería</h3>
            <p>Descubre imágenes sorprendentes con la API de Unsplash.</p>
            <a href="#gallery" class="section-button">Explorar galería</a>
          </div>
        </div>

        <div class="section-card">
          <div class="section-image portfolio-image"></div>
          <div class="section-content">
            <h3>Portafolio</h3>
            <p>Conoce mis proyectos y experiencias profesionales.</p>
            <a href="#portfolio" class="section-button">Ver portafolio</a>
          </div>
        </div>
      </div>

    </div>
  `;

  // Event listeners might need adjustment if functionality changes, but basic navigation should still work
  appElement.querySelectorAll('.section-card .section-button').forEach(button => {
    button.addEventListener('click', (e) => {
      console.log(`Navigating to ${e.target.getAttribute('href')}`);
    });
  });
} 