export default function Footer(parentElement) {
  const footerElement = document.createElement('footer');
  footerElement.innerHTML = `
    <p>&copy; ${new Date().getFullYear()} Fusion Web. Todos los derechos reservados.</p>
  `;
  parentElement.appendChild(footerElement);
} 