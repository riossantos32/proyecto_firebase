import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    resources: {
      en: {
        translation: {
          menu: {
            inicio: "Home",
            categorias: "Categories",
            productos: "Products",
            catalogo: "Catalog",
            libros: "Books",
            clima: "Weather",
            pronunciacion: "Pronunciation",
            estadisticas: "Statistics",
            empleados: "Employees",
            cerrarSesion: "Logout",
            iniciarSesion: "Login",
            idioma: "Language",
            español: "Spanish",
            ingles: "English",
          },
          inicio : {
            titulo: "Home",
            descripcion: "This is the home component.",
          },
        }
      },
      es: {
        translation: {
          menu: {
            inicio: "Inicio",
            categorias: "Categorías",
            productos: "Productos",
            catalogo: "Catálogo",
            libros: "Libros",
            clima: "Clima",
            pronunciacion: "Pronunciación",
            estadisticas: "Estadísticas",
            empleados: "Empleados",
            cerrarSesion: "Cerrar Sesión",
            iniciarSesion: "Iniciar Sesión",
            idioma: "Idioma",
            español: "Español",
            ingles: "Inglés",
          },
          inicio : {
            titulo: "Inicio",
            descripcion: "Este es el componente de inicio.",
          },
        }
      }
    },
  });

export default i18n;
