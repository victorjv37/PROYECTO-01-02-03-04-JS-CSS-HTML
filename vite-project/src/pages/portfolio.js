import { profile, education, experience, skills, projects } from '../data/portfolioData.js';

let currentSlide = 0;
let educationInterval = null;

function renderPortfolio(appElement) {
  currentSlide = 0; // Reset slide on page load
  clearInterval(educationInterval); // Clear any existing interval

  // Generate HTML for each section
  const profileHtml = `
    <section class="profile-section">
      <h2 class="section-title">Perfil Profesional</h2>
      <div class="profile-card">
        <div class="profile-header">
          <div class="profile-image">
            <img src="${profile.photo}" alt="${profile.name}" />
          </div>
          <div class="profile-info">
            <h1>${profile.name}</h1>
            <h2>${profile.title}</h2>
            <p>${profile.description}</p>
          </div>
        </div>
        <div class="profile-contact">
          ${profile.location ? `<div class="contact-item">📍<span>${profile.location}</span></div>` : ''}
          ${profile.email ? `<div class="contact-item">✉️<span>${profile.email}</span></div>` : ''}
          ${profile.phone ? `<div class="contact-item">📞<span>${profile.phone}</span></div>` : ''}
          ${profile.website ? `<div class="contact-item">🌐<span><a href="https://${profile.website}" target="_blank" rel="noopener noreferrer">${profile.website}</a></span></div>` : ''}
          ${profile.linkedin ? `<div class="contact-item">🔗<span><a href="https://${profile.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a></span></div>` : ''}
          ${profile.github ? `<div class="contact-item">🐙<span><a href="https://${profile.github}" target="_blank" rel="noopener noreferrer">GitHub</a></span></div>` : ''}
        </div>
      </div>
    </section>
  `;

  const educationHtml = `
    <section class="education-section">
      <h2 class="section-title">Formación Académica</h2>
      <div class="carousel-container">
        <button class="carousel-button prev" id="edu-prev">❮</button>
        <div class="carousel-wrapper">
          ${education.map((edu, index) => `
            <div class="carousel-slide ${index === currentSlide ? 'active' : ''}" data-slide-index="${index}">
              <div class="education-card">
                <div class="education-logo">
                  <img src="${edu.logo}" alt="${edu.institution}" />
                </div>
                <div class="education-details">
                  <h3>${edu.degree}</h3>
                  <h4>${edu.institution}</h4>
                  <span class="education-year">${edu.year}</span>
                  <p>${edu.description}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        <button class="carousel-button next" id="edu-next">❯</button>
        <div class="carousel-indicators" id="edu-indicators">
          ${education.map((_, index) => `
            <div class="indicator ${index === currentSlide ? 'active' : ''}" data-indicator-index="${index}"></div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  const experienceHtml = `
    <section class="experience-section">
      <h2 class="section-title">Experiencia Laboral</h2>
      <div class="timeline">
        ${experience.map((exp, index) => `
          <div key="${index}" class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="company-logo">
                 <img src="${exp.logo}" alt="${exp.company}" />
              </div>
              <div class="experience-details">
                <h3>${exp.position}</h3>
                <h4>${exp.company}</h4>
                <span class="experience-period">${exp.period}</span>
                <p>${exp.description}</p>
                ${exp.achievements && exp.achievements.length > 0 ? `
                  <div class="achievements">
                    <h5>Logros destacados:</h5>
                    <ul>
                      ${exp.achievements.map((achievement, i) => `<li key="${i}">${achievement}</li>`).join('')}
                    </ul>
                  </div>
                ` : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;

  const skillsHtml = `
    <section class="skills-section">
      <h2 class="section-title">Habilidades Técnicas</h2>
      <div class="skills-container">
        ${skills.map((skill, index) => `
          <div key="${index}" class="skill-item">
            <div class="skill-info">
              <span class="skill-name">${skill.name}</span>
              <span class="skill-percentage">${skill.percentage}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: ${skill.percentage}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;

  const projectsHtml = `
    <section class="projects-section">
      <h2 class="section-title">Proyectos Destacados</h2>
      <div class="projects-grid">
        ${projects.map((project, index) => `
          <div key="${index}" class="project-card">
            <div class="project-image">
              <img src="${project.image}" alt="${project.title}" />
            </div>
            <div class="project-details">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              ${project.technologies && project.technologies.length > 0 ? `
                <div class="project-technologies">
                  ${project.technologies.map((tech, i) => `<span key="${i}" class="technology-tag">${tech}</span>`).join('')}
                </div>
              ` : ''}
              <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">Ver proyecto</a>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;

  // Combine all sections
  appElement.innerHTML = `
    <div class="portfolio-container">
      ${profileHtml}
      ${educationHtml}
      ${experienceHtml}
      ${skillsHtml}
      ${projectsHtml}
    </div>
  `;

  // --- Education Carousel Logic ---
  const carouselWrapper = appElement.querySelector('.carousel-wrapper');
  const indicatorsContainer = appElement.querySelector('#edu-indicators');

  function updateCarousel() {
    const slides = carouselWrapper.querySelectorAll('.carousel-slide');
    const indicators = indicatorsContainer.querySelectorAll('.indicator');
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentSlide);
    });
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentSlide);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % education.length;
    updateCarousel();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + education.length) % education.length;
    updateCarousel();
  }

  function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
    resetInterval(); // Reset timer when manually changing slide
  }

  // Add listeners to buttons
  appElement.querySelector('#edu-prev')?.addEventListener('click', () => { prevSlide(); resetInterval(); });
  appElement.querySelector('#edu-next')?.addEventListener('click', () => { nextSlide(); resetInterval(); });

  // Add listeners to indicators
  indicatorsContainer.querySelectorAll('.indicator').forEach(indicator => {
    indicator.addEventListener('click', (e) => {
      goToSlide(parseInt(e.target.dataset.indicatorIndex, 10));
    });
  });

  // Auto-slide interval
  function startInterval() {
     return setInterval(nextSlide, 5000);
  }

  function resetInterval() {
     clearInterval(educationInterval);
     educationInterval = startInterval();
  }

  educationInterval = startInterval();
}

export default renderPortfolio; 