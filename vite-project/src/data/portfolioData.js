import profilePhoto from '../assets/WIN_20250321_09_40_43_Pro.jpg';

// Datos del perfil
export const profile = {
  name: "Victor Jimenez Vaquero",
  title: "Junior Frontend Developer en Microsoft y React Developer",
  photo: profilePhoto,
  description: "Desarrollador junior con más de 2 años de experiencia especializado en crear experiencias web intuitivas, accesibles y de alto rendimiento. Apasionado por las últimas tecnologías web y la arquitectura de software moderna. Actualmente trabajo en el equipo de desarrollo frontend de Microsoft, donde contribuyo al diseño y desarrollo de interfaces innovadoras.",
  location: "Badajoz, España",
  email: "victorjimenezvaquero@gmail.com",
  phone: "+34 612 345 678",
  website: "www.victorjimenezvaquero.com",
  linkedin: "linkedin.com/in/victor-jimenez-vaquero",
  github: "github.com/victorjimenezvaquero",
  twitter: "twitter.com/victorjimenezvaquero"
};

// Datos de educación
export const education = [
  {
    degree: "Máster en Ingeniería Web",
    institution: "Universidad de Extremadura",
    year: "2024",
    logo: "https://ametic.es/wp-content/uploads/2023/04/LOGOTIPO-leyenda-color-PNG-p.png",
    description: "Especialización en tecnologías frontend avanzadas, arquitectura de aplicaciones web y rendimiento. Proyecto final sobre optimización de aplicaciones React para dispositivos móviles."
  },
  {
    degree: "Grado en Ingeniería Informática",
    institution: "Universidad de Extremadura",
    year: "2016",
    logo: "https://www.ucm.es/themes/ucm16/media/img/logo.png",
    description: "Formación integral en desarrollo de software, algoritmos, bases de datos y arquitectura de sistemas. Premio al mejor expediente académico de mi promoción."
  },
  {
    degree: "Microsoft Certified: Azure Developer Associate",
    institution: "Microsoft",
    year: "2020",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png",
    description: "Certificación profesional que valida habilidades avanzadas en desarrollo de soluciones cloud con Microsoft Azure, integración de APIs y servicios web."
  }
];

// Datos de experiencia laboral
export const experience = [
  {
    position: "Junior Frontend Developer",
    company: "Microsoft",
    period: "2024 - Presente",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png",
    description: "Lidero el desarrollo frontend de aplicaciones web internas para el equipo de Microsoft 365, implementando soluciones escalables y accesibles con React, TypeScript y Azure.",
    achievements: [
      "Rediseño completo de la interfaz de usuario del portal de administración, mejorando la experiencia de usuario en un 40%",
      "Implementación de una biblioteca de componentes reutilizables que redujo el tiempo de desarrollo en un 25%",
      "Optimización del rendimiento de la aplicación, reduciendo el tiempo de carga inicial en un 60%"
    ]
  },
  {
    position: "Frontend Developer",
    company: "Google",
    period: "2023 - 2024",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png",
    description: "Trabajé en el equipo de desarrollo de Google Cloud Platform, contribuyendo a la creación de interfaces intuitivas y altamente funcionales utilizando Angular y Material Design.",
    achievements: [
      "Desarrollo de componentes interactivos que mejoraron la visualización de datos complejos",
      "Implementación de pruebas automatizadas que aumentaron la cobertura de código al 90%",
      "Colaboración en el rediseño responsivo que mejoró la experiencia en dispositivos móviles"
    ]
  },
  {
    position: "Desarrollador Web Junior",
    company: "Indra",
    period: "2022 - 2023",
    logo: "https://www.pta.es/wp-content/uploads/2020/04/logotipo_indra.jpg",
    description: "Participé en el desarrollo de aplicaciones web para clientes del sector financiero, implementando soluciones con JavaScript, jQuery y Bootstrap.",
    achievements: [
      "Contribuí al desarrollo de un dashboard analítico para una importante entidad bancaria",
      "Implementación de mejoras de accesibilidad siguiendo estándares WCAG 2.0",
      "Optimización del rendimiento de una aplicación crítica, reduciendo el uso de recursos en un 30%"
    ]
  }
];

// Datos de habilidades técnicas
export const skills = [
  { name: "React", percentage: 95 },
  { name: "JavaScript", percentage: 90 },
  { name: "TypeScript", percentage: 85 },
  { name: "HTML5/CSS3", percentage: 90 },
  { name: "Node.js", percentage: 75 },
  { name: "GraphQL", percentage: 80 },
  { name: "Redux", percentage: 85 },
  { name: "SASS/SCSS", percentage: 80 },
  { name: "Material UI", percentage: 85 },
  { name: "Git/GitHub", percentage: 90 },
  { name: "Jest/Testing Library", percentage: 75 },
  { name: "Webpack", percentage: 70 }
];

// Datos de proyectos destacados
export const projects = [
  {
    title: "Dashboard Analytics Pro",
    description: "Dashboard interactivo para visualización de datos analíticos en tiempo real",
    image: "https://cdn.dribbble.com/users/5031392/screenshots/15467520/media/c36b3b15b25b1e190d081abdbbf947cf.png?resize=1000x750",
    technologies: ["React", "TypeScript", "D3.js", "Material UI"],
    link: "#"
  },
  {
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico con gestión de inventario y pasarela de pagos",
    image: "https://cdn.dribbble.com/users/3637068/screenshots/15467010/media/69a3279182b75365013fe285733d1122.png?resize=1000x750",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    link: "#"
  },
  {
    title: "Content Manager System",
    description: "CMS personalizado para la gestión de contenidos digitales y medios",
    image: "https://cdn.prod.website-files.com/648b36e4f08fd15118081200/66dab877a56d5bc41e04c720_648b36e4f08fd151180814d4_Content%2520Management%2520System_VCMO.jpeg",
    technologies: ["React", "GraphQL", "Apollo", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Task Manager App",
    description: "Aplicación para gestión de tareas y proyectos con características colaborativas",
    image: "https://www.chanty.com/blog/wp-content/uploads/2020/10/Task-manager-apps-scaled.jpg",
    technologies: ["React", "Firebase", "Redux", "Material UI"],
    link: "#"
  }
]; 