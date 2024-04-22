import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Obtener el idioma guardado del localStorage
const savedLanguage = localStorage.getItem("language");

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "About me": "About me",
        about1:
          "Hello! I'm Pedro Mas, a passionate fullstack developer with seven years of experience in the technology industry. I graduated in Computer Science with a strong belief that innovation and creativity are the driving forces of progress in our field.",
        about2:
          "Throughout my professional career, I've had the privilege of working on a variety of challenging projects that have allowed me to develop my technical skills and my ability to efficiently solve problems. My focus is on creating robust and scalable software solutions that meet the needs of end-users.",
        about3:
          "My experience spans from developing web and mobile applications to implementing complex database systems and optimizing performance. Additionally, I am passionate about staying up-to-date with the latest trends and emerging technologies in the world of software development.",
        about4:
          "As a committed professional, I strive to effectively collaborate with multidisciplinary teams, communicating ideas clearly and contributing to the collective success of the project. I firmly believe in continuous learning and constant improvement, always seeking new opportunities for personal and professional growth.",
        about5:
          "I am excited about future opportunities that allow me to continue growing and contributing to the exciting world of technology. If you're interested in learning more about my work or connecting with me, feel free to contact me on",
      },
    },
    es: {
      translation: {
        "To-do list": "Lista To-do",
        Chess: "Ajedrez",
        Minesweeper: "Buscaminas",
        Snake: "La vivorita",
        "About me": "Sobre mí",
        Filters: "Filtros",
        All: "Todas",
        Active: "Activas",
        Completed: "Completadas",
        "What needs to be done?": "Qué necesito hacer?",
        "Enter task": "Ingresar tarea",
        Add: "Agregar",
        task: "tarea",
        tasks: "tareas",
        "Task can't be empty": "La tarea no puede estar vacia",
        "Chess with Stockfish": "Ajedrez con Stockfish",
        about1:
          "¡Hola! Soy Pedro Mas, un apasionado programador con siete años de experiencia en la industria de la tecnología. Me gradué en Ciencias de la Computación con la firme convicción de que la innovación y la creatividad son los motores impulsadores del progreso en nuestro campo.",
        about2:
          "Durante mi carrera profesional, he tenido el privilegio de trabajar en una variedad de proyectos desafiantes que me han permitido desarrollar mis habilidades técnicas y mi capacidad para resolver problemas de manera eficiente. Mi enfoque se centra en crear soluciones de software robustas y escalables que satisfagan las necesidades del usuario final.",
        about3:
          "Mi experiencia abarca desde el desarrollo de aplicaciones web y móviles hasta la implementación de sistemas complejos de bases de datos y la optimización de rendimiento. Además, me apasiona mantenerme al día con las últimas tendencias y tecnologías emergentes en el mundo del desarrollo de software.",
        about4:
          "Como profesional comprometido, me esfuerzo por colaborar de manera efectiva con equipos multidisciplinarios, comunicando ideas de manera clara y contribuyendo al éxito colectivo del proyecto. Creo firmemente en el aprendizaje continuo y en la mejora constante, buscando siempre nuevas oportunidades para crecer tanto a nivel personal como profesional.",
        about5:
          "Estoy emocionado por las futuras oportunidades que me permitan seguir creciendo y contribuyendo al emocionante mundo de la tecnología. Si estás interesado en conocer más sobre mi trabajo o en explorar posibles colaboraciones, ¡no dudes en ponerte en contacto conmigo!",
      },
    },
  },
  lng: savedLanguage || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
