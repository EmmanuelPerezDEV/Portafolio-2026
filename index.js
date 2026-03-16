   const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
      card.addEventListener('click', () => {
        const isActive = card.classList.contains('active');
        projectCards.forEach(item => item.classList.remove('active'));
        if (!isActive) card.classList.add('active');
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });

    const translations = {
      en: {
        navAbout: 'About', navSkills: 'Skills', navProjects: 'Projects', navExperience: 'Experience', navContact: 'Contact',
        heroBadge: 'Open to Junior Java / Full Stack Opportunities',
        heroText: 'Junior Java Full Stack Developer focused on building web applications with Java, Spring Boot, SQL, HTML, CSS, JavaScript, and Bootstrap. I enjoy creating practical solutions, improving user experience, and collaborating in agile teams.',
        heroBtnProjects: 'View Projects', heroBtnContact: 'Contact Me', quickTitle: 'Quick Overview', quickLocation: 'Location', quickStack: 'Main Stack', quickLanguages: 'Languages',
        aboutTitle: 'About Me',
        aboutText: 'I am a Computer Technology Engineer and Junior Java Full Stack Developer with hands-on experience in web development, REST APIs, SQL databases, and technical support. My background combines software development, problem solving, and communication skills in both Spanish and English.',
        educationTitle: 'Education', educationDegree: 'Computer Technology Engineering', educationBootcamp: 'Java Full Stack Developer Bootcamp',
        skillsTitle: 'Technical Skills', skillsSubtitle: 'Tools and technologies I use across backend, frontend, databases, testing, and support.',
        projectsTitle: 'Projects', projectsSubtitle: 'These cards are ready for your GitHub repos and live demos.',
        project1Title: 'Vittalium', project1Text: 'E-commerce web application built with Java and Spring Boot, including REST APIs for product management, SQL database integration, and responsive frontend views.',
        project2Title: 'Portfolio Website', project2Text: 'Personal portfolio website designed to showcase my background, technical skills, and featured projects for recruiter and GitHub Pages visibility.',
        project3Title: 'Phone Agenda', project3Text: ' Phone agenda developed using JavaSWING.',
        projectRepo: 'GitHub Repo', projectDemo: 'Live Demo',
        experienceTitle: 'Experience', exp1Text: 'Developed an e-commerce application with backend, frontend, SQL database work, and Git-based collaboration.', exp2Text: 'Provided technical support in English for hospital software and account management processes.', exp3Text: 'Resolved software issues, supported user accounts, and documented incidents and solutions.',
        coursesTitle: 'Courses & Certifications', contactTitle: 'Let’s Connect', contactSubtitle: 'Replace the links below with your real profiles and published projects.',
        contactEmail: 'Email Me', contactGithub: 'GitHub', contactLinkedin: 'LinkedIn', footerText: '© 2026 José Emmanuel Pérez Pérez. Built for GitHub Pages.'
      },
      es: {
        navAbout: 'Sobre mí', navSkills: 'Habilidades', navProjects: 'Proyectos', navExperience: 'Experiencia', navContact: 'Contacto',
        heroBadge: 'Disponible para oportunidades Junior Java / Full Stack',
        heroText: 'Desarrollador Java Full Stack Jr. enfocado en crear aplicaciones web con Java, Spring Boot, SQL, HTML, CSS, JavaScript y Bootstrap. Me gusta construir soluciones prácticas, mejorar la experiencia de usuario y colaborar en equipos ágiles.',
        heroBtnProjects: 'Ver proyectos', heroBtnContact: 'Contáctame', quickTitle: 'Resumen rápido', quickLocation: 'Ubicación', quickStack: 'Stack principal', quickLanguages: 'Idiomas',
        aboutTitle: 'Sobre mí',
        aboutText: 'Soy Ingeniero en Tecnologías Computacionales y Desarrollador Java Full Stack Jr. con experiencia práctica en desarrollo web, APIs REST, bases de datos SQL y soporte técnico. Mi perfil combina desarrollo de software, resolución de problemas y comunicación efectiva en español e inglés.',
        educationTitle: 'Educación', educationDegree: 'Ingeniería en Tecnologías Computacionales', educationBootcamp: 'Bootcamp de Desarrollador Java Full Stack',
        skillsTitle: 'Habilidades técnicas', skillsSubtitle: 'Herramientas y tecnologías que uso en backend, frontend, bases de datos, testing y soporte.',
        projectsTitle: 'Proyectos', projectsSubtitle: 'Estas cards están listas para conectar tus repos de GitHub y demos en vivo.',
        project1Title: 'Vittalium', project1Text: 'Aplicación web de e-commerce construida con Java y Spring Boot, incluyendo APIs REST para la gestión de productos, integración con base de datos SQL y vistas frontend responsivas.',
        project2Title: 'Sitio de portafolio', project2Text: 'Sitio web personal diseñado para mostrar mi perfil, habilidades técnicas y proyectos destacados para reclutadores y visibilidad en GitHub Pages.',
        project3Title: 'Agenda Telefonica desarrollada en Java', project3Text: 'Agenda Telefonica desarrollada en JavaSwing usando un hashmap.',
        projectRepo: 'Repositorio GitHub', projectDemo: 'Demo en vivo',
        experienceTitle: 'Experiencia', exp1Text: 'Desarrollé una aplicación e-commerce con trabajo de backend, frontend, base de datos SQL y colaboración con Git.', exp2Text: 'Brindé soporte técnico en inglés para software hospitalario y procesos de gestión de cuentas.', exp3Text: 'Resolví incidencias de software, apoyé con cuentas de usuario y documenté incidentes y soluciones.',
        coursesTitle: 'Cursos y certificaciones', contactTitle: 'Conectemos', contactSubtitle: 'Reemplaza los enlaces de abajo con tus perfiles reales y proyectos publicados.',
        contactEmail: 'Envíame correo', contactGithub: 'GitHub', contactLinkedin: 'LinkedIn', footerText: '© 2026 José Emmanuel Pérez Pérez. Hecho para GitHub Pages.'
      }
    };

    const langToggle = document.getElementById('langToggle');
    let currentLang = 'en';

    function applyLanguage(lang) {
      document.documentElement.lang = lang;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) el.textContent = translations[lang][key];
      });
      langToggle.textContent = lang === 'en' ? 'ES' : 'EN';
      currentLang = lang;
    }

    langToggle.addEventListener('click', () => {
      applyLanguage(currentLang === 'en' ? 'es' : 'en');
    });

    applyLanguage('en');