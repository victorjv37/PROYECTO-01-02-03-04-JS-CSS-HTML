let currentModalImage = null;
let modalContainer = null; // Will be assigned on render

function renderModal(image) {
  if (!image) return '';

  // Basic modal structure based on the React example
  return `
    <div class="image-modal" id="gallery-modal-backdrop">
      <div class="modal-content">
        <button class="close-button" id="modal-close-btn">&times;</button>
        <img 
          src="${image.urls.regular}" 
          alt="${image.alt_description || 'Imagen a tamaño completo'}" 
          class="modal-image"
        />
        <div class="modal-footer">
          <div class="modal-user-info">
            <img 
              src="${image.user.profile_image.medium}" 
              alt="${image.user.name}" 
              class="modal-user-avatar" 
            />
            <div class="modal-user-details">
              <p class="modal-user-name">${image.user.name}</p>
              ${image.user.instagram_username ? `<p class="modal-user-social">@${image.user.instagram_username}</p>` : ''}
            </div>
          </div>
          <div class="modal-actions">
            <a 
              href="${image.links.download}&force=true" 
              download 
              target="_blank" 
              rel="noopener noreferrer" 
              class="modal-download-button"
            >
              Descargar
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function openModal(image) {
  currentModalImage = image;
  if (modalContainer) {
    modalContainer.innerHTML = renderModal(image);
    modalContainer.classList.add('visible');
    document.body.style.overflow = 'hidden'; // Prevent background scroll

    // Add listeners for closing the modal
    modalContainer.querySelector('#modal-close-btn')?.addEventListener('click', closeModal);
    modalContainer.querySelector('#gallery-modal-backdrop')?.addEventListener('click', (e) => {
      // Close only if backdrop itself is clicked, not content
      if (e.target.id === 'gallery-modal-backdrop') {
        closeModal();
      }
    });
  }
}

function closeModal() {
  currentModalImage = null;
  if (modalContainer) {
    modalContainer.innerHTML = '';
    modalContainer.classList.remove('visible');
    document.body.style.overflow = 'auto'; // Restore background scroll
  }
}

// Handle Escape key press
function handleKeyDown(e) {
  if (e.key === 'Escape' && currentModalImage) {
    closeModal();
  }
}

export default function renderGallery(appElement) {
  appElement.innerHTML = `
    <section id="gallery">
      <h1>Galería de Imágenes</h1>
      <p>Explora imágenes dinámicas de Unsplash.</p>
      <div class="search-container">
        <input type="text" id="gallery-search" placeholder="Buscar imágenes (ej: nature, cars, space)">
        <button id="search-button">Buscar</button>
      </div>
      <div id="gallery-images"></div>
      <p id="gallery-fallback" style="display: none;">No se encontraron resultados para tu búsqueda.</p>
    </section>
  `;

  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('gallery-search');
  const imagesContainer = document.getElementById('gallery-images');
  const fallbackMessage = document.getElementById('gallery-fallback');
  modalContainer = document.getElementById('modal-container'); // Assign the modal container

  // TODO: Add Unsplash API key securely (e.g., via environment variables)
  const UNSPLASH_ACCESS_KEY = 'PLe_qRRYnIM06TYGmR4tOxjjCpO6ajnb24zOLy3wTQo'; // Replace with your key

  async function fetchImages(query = 'nature') {
    imagesContainer.innerHTML = ''; 
    fallbackMessage.style.display = 'none';
    // Optional: Show loading state here

    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=24`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        data.results.forEach(photo => {
          const cardElement = document.createElement('div');
          cardElement.classList.add('gallery-card');

          const imgElement = document.createElement('img');
          imgElement.src = photo.urls.regular; 
          imgElement.alt = photo.alt_description || 'Unsplash image';
          imgElement.loading = 'lazy'; // Add lazy loading

          cardElement.appendChild(imgElement);
          
          // Add click listener to open modal
          cardElement.addEventListener('click', () => openModal(photo));

          imagesContainer.appendChild(cardElement);
        });
      } else {
        fallbackMessage.style.display = 'block'; 
      }
    } catch (error) {
      console.error('Error fetching Unsplash images:', error);
      imagesContainer.innerHTML = '<p class="error-message">Error al cargar las imágenes. Por favor, inténtalo de nuevo más tarde.</p>';
    } finally {
      // Optional: Hide loading state here
    }
  }

  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    fetchImages(query || 'random'); // Fetch 'random' if query is empty
  });

  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const query = searchInput.value.trim();
      fetchImages(query || 'random');
    }
  });

  // Add keydown listener for Escape key
  window.addEventListener('keydown', handleKeyDown);

  // Cleanup listener when navigating away (if using a SPA framework)
  // This basic example doesn't have explicit cleanup, 
  // but in a larger app, remove the listener on component unmount/page change.

  // Initial fetch on load
  fetchImages();
} 