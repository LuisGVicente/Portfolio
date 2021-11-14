let timelineElements = [
    {
      id: 1,
      title: "Software Engineer",
      institution: "Capgemini Murcia",
      location: "Murcia, España",
      description:
        "Gestión de la web de clientes particulares de la mayor empresa energética de Francia. La web es gestionada por el equipo de Touluse con soporte de un equipo español. El idioma de trabajo es el francés. Tecnologías usadas: ",
      role: [
              {tech: "Angular 7, Angular JS, Java, JS, Jenkins, Adobe Experience Manager, GIT, Agile"}
            ],
      buttonText: "Ver proyecto",
      href: "https://particulier.edf.fr/fr/accueil.html",
      date: "Mayo 2021 - Actualmente",
      icon: "work",
      src: "https://img.icons8.com/doodle/48/000000/france.png"
    },
    {
      id: 2,
      title: "Front End Developer",
      institution: "PresenteDigital",
      location: "Elche, España",
      description:
        "Proyecto propio destinado a la creación de páginas webs para empresas. Tecnologías usadas y proyectos realizados: ",
      role: [
              {tech: "Wordpress, Elementor, Prestashop, HTML, CSS, Excel, Canvas"},
              {tech :"Visteme y verás, tienda de ropa para bebés",
              href: "https://vistemeyveras.es/"},
              {tech :"Iker López, estudio de arquitectura",
              href: "https://ikerlopez.com/"},
            ],
      buttonText: "PresenteDigital",
      href: "https://presentedigital.es",
      date: "Febrero 2021 - Junio 2021",
      icon: "work",
      src: "https://img.icons8.com/doodle/48/000000/spain-2.png"
    },
    {
      id: 3,
      title: "FullStack Developer",
      institution: "Upgrade Hub",
      location: "Madrid, España",
      description:
        "Bootcamp de programación. Tecnologías usadas: ",
      role: [
            {tech: "Vanilla JavaScript, React, Docker, MySQL, MongoDB, CSS, HTML, PHP Symfony, NodeJS, Angular."},
            {tech: "Introducción a metodologías ágiles como Agile o Scrum"}
            ],
      buttonText: "Ver academia",
      href: "https://pro.upgrade-hub.com/",
      date: "Octubre 2020 - Enero 2021",
      icon: "school",
      src: "https://img.icons8.com/doodle/48/000000/spain-2.png"
    },
    {
      id: 4,
      title: "Manager del departamento de Tesorería Y Mayorista",
      institution: "Global Exchange Australia",
      location: "Sydney, AUSTRALIA",
      description:
        "Promoción a manager del departamento de Tesorería de la filial Australiana del Grupo Global Exchange. Principales funciones: ",
      role: [
            {tech: "Diseño e implementación del departamento en el centro de trabajo."},
            {tech :"Formador del equipo de tesoreros y asesores."},
            {tech :"Gestión del equipo de tesoreros (3) y asesores (50)."},
            {tech :"Responsable de compras y ventas de la filial."},
            ],
      buttonText: "Ver empresa",
      href: "https://www.global-exchange.com.au/",
      date: "June 2013 - August 2016",
      icon: "work",
      src: "https://img.icons8.com/doodle/48/000000/great-britain.png"
    },
    {
      id: 5,
      title: "Responsable de implementación y formación de equipos",
      institution: "Global Exchange Hong Kong",
      location: "HONG KONG",
      description:
        "Miembro del equipo responsable de la apertura de la primera filial en Asia del grupo.",
      role: [
            {tech: "Diseño del departamento de Tesorería y su implementación en la apertura de la sede en Hong Kong."},
            {tech: "Formación del equipo de tesoreros (5) y de asesores (75)."}
           ],
      buttonText: "Ver empresa",
      href: "https://www.globalexchange.hk/en/home",
      date: "Enero 2018 - Marzo 2018",
      icon: "work",
      src: "https://img.icons8.com/color/48/000000/hongkong-flag.png"
    },
    {
      id: 6,
      title: "Gestor del Departamento de Tesorería",
      institution: "Global Exchange España",
      location: "Madrid, ESPAÑA",
      description:
        "Promoción como gestor de tesorería hasta 2014 y manager de departamento desde 2015. Principales funciones: ",
      role: [
          {tech: "Gestión del equipo de tesorería (2) y del equipo de asesores(25)."},
          {tech: "Determinar Precios y rentabilidad."}
           ],
      buttonText: "Ver empresa",
      href: "https://www.linkedin.com/company/global-exchange-group/?originalSubdomain=es",
      date: "September 2013 - Agosto 2016",
      icon: "work",
      src: "https://img.icons8.com/doodle/48/000000/spain-2.png"
    },
    {
      id: 7,
      title: "Asesor comercial",
      institution: "Global Exchange España",
      location: "Aeropuerto Adolfo Suarez-Barajas, Madrid, ESPAÑA",
      description:
        "Trato directo con el cliente y asesoría de cambio de divisas.",
      role: "",
      buttonText: "Ver empresa",
      href: "https://www.linkedin.com/company/global-exchange-group/?originalSubdomain=es",
      date: "September 2012 - Agosto 2013",
      icon: "work",
      src: ""
    },
    {
      id: 8,
      title: "Editor Newsletter",
      institution: "Asociación Española de Blogs de Moda",
      location: "Madrid, ESPAÑA",
      description:
        "Cobertura de eventos de la asociación y edición de la newsletter mensual para sus socios.",
      role: "",
      buttonText: "",
      href: "",
      date: "2012",
      icon: "work",
      src: ""
    },
    {
      id: 9,
      title: "Master en Periodismo Multimedia Profesional",
      institution: "Universidad Complutense",
      location: "Madrid, ESPAÑA",
      description:
        "Aplicación de Nuevas Tecnologías a las Ciencias de la Información.",
      role: "",
      buttonText: "",
      href: "",
      date: "Septiembre 2010 - Mayo 2011",
      icon: "school",
      src: ""
    },
    {
      id: 10,
      title: "Beca Faro",
      institution: "Universidade do Porto",
      location: "Oporto, PORTUGAL",
      description:
        "Estancia de trabajo en la Oficina de Relaciones Internacionales de la UP.",
      role: "",
      buttonText: "",
      href: "",
      date: "Enero 2009 - Agosto 2009",
      icon: "school",
      src: "https://img.icons8.com/doodle/48/000000/portugal.png"
    },
    {
      id: 11,
      title: "Beca Erasmus",
      institution: "Université d`Avignon",
      location: "Avignon, FRANCIA",
      description:
        "Curso completo en Francia para aprender el idioma.",
      role: "",
      buttonText: "",
      href: "",
      date: "Septiembre 2007 - Mayo 2008",
      icon: "school",
      src: "https://img.icons8.com/doodle/48/000000/france.png"
    },
    {
      id: 12,
      title: "Licenciatura en Sociología",
      institution: "Universidad de Alicante",
      location: "Alicante, ESPAÑA",
      description:
        "Ciencias Sociales, Historia, Economía, Psicología, Teoría de grupos, Filosofía, Estadística, Antropología.",
      role: "",
      buttonText: "",
      href: "",
      date: "2004-2010",
      icon: "school",
      src: ""
    },

  ];
  
  export default timelineElements;
  