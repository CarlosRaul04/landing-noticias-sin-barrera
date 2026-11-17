/** Todo el texto de la landing en un solo lugar: para editar contenido no hace falta tocar componentes. */
import type { IconName } from '../components/ui/Icon';

export const NAV_LINKS = [
  { href: '#para-quien', label: 'Para quién' },
  { href: '#herramientas', label: 'Herramientas' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#ayuda', label: 'Ayuda' },
];

export const HERO = {
  eyebrow: 'Accesibilidad cognitiva para la prensa digital',
  title: ['Leer noticias,', 'sin barreras.'],
  lead: 'Un plugin para diarios digitales que resume la nota, quita lo que distrae, ajusta la letra y la lee en voz alta. Pensado para personas con TDAH, dislexia o autismo.',
  primary: 'Probar el demo',
  secondary: 'Ver las herramientas',
  facts: [
    { value: '4', label: 'herramientas en un botón' },
    { value: '0', label: 'datos personales pedidos' },
    { value: '1 min', label: 'para aprender a usarlo' },
  ],
};

export interface Audience { icon: IconName; title: string; need: string; answer: string; }
export const AUDIENCES: Audience[] = [
  { icon: 'focus', title: 'TDAH', need: 'Los anuncios, videos y avisos compiten por tu atención.', answer: 'Oculta todo lo que distrae y resume la nota en 4 ideas.' },
  { icon: 'type', title: 'Dislexia', need: 'Los textos apretados y largos cansan rápido.', answer: 'Cambia la letra, el espacio y el color, o escucha la noticia.' },
  { icon: 'shapes', title: 'Autismo nivel 1', need: 'Las metáforas y lo inesperado generan ansiedad.', answer: 'Lenguaje claro, palabras explicadas y nada que se mueva solo.' },
];

export interface Feature { id: string; icon: IconName; name: string; title: string; text: string; points: string[]; image: string; alt: string; }
export const FEATURES: Feature[] = [
  {
    id: 'resumir', icon: 'sparkle', name: 'Resumir', title: 'La noticia en 4 ideas',
    text: 'Cada idea se lee de una en una y te muestra dónde lo dice la noticia, para que puedas comprobarlo.',
    points: ['Palabras difíciles con su explicación', 'Aviso claro de que lo hace una IA', 'Reportar una idea equivocada'],
    image: '/img/pantalla-resumen.webp', alt: 'Panel Resumir mostrando la primera de cuatro ideas',
  },
  {
    id: 'foco', icon: 'eye', name: 'Sin distracciones', title: 'Solo la noticia',
    text: 'Oculta anuncios, videos que se reproducen solos y otras noticias con un toque. Puedes volver a mostrarlos cuando quieras.',
    points: ['Anuncios y banners fuera', 'Sin videos automáticos', 'Se deshace en un toque'],
    image: '/img/pantalla-sin-anuncios.webp', alt: 'Noticia sin anuncios ni elementos laterales',
  },
  {
    id: 'letra', icon: 'type', name: 'Letra y color', title: 'Lee a tu manera',
    text: 'Elige un estilo listo o ajusta la letra, el tamaño, el espacio entre líneas y el color del fondo.',
    points: ['Estilos listos como «Más aire»', 'Fondos cálidos que cansan menos', 'Se guarda para la próxima vez'],
    image: '/img/pantalla-letra.webp', alt: 'Noticia con letra más grande y más espacio entre líneas',
  },
  {
    id: 'escuchar', icon: 'sound', name: 'Escuchar', title: 'Escucha mientras sigues el texto',
    text: 'La noticia se lee en voz alta y la frase que suena se marca en amarillo, para no perderte.',
    points: ['Velocidad ajustable', 'Pausa y sigue donde quedaste', 'Funciona en el celular'],
    image: '/img/pantalla-escuchar.webp', alt: 'Noticia leída en voz alta con la frase actual resaltada en amarillo',
  },
];

export const STEPS = [
  { title: 'Abre una noticia', text: 'En tu diario digital de siempre, en el celular o la computadora.' },
  { title: 'Toca «Lectura fácil»', text: 'Aparece una barra con las cuatro herramientas. Nada más cambia.' },
  { title: 'Elige lo que necesitas', text: 'Notín te guía la primera vez. Todo se puede deshacer.' },
];

export const HELP = {
  title: 'Si tienes una duda, Notín te acompaña',
  text: 'Un Centro de ayuda dentro del plugin, sin chats flotantes ni ventanas que aparecen solas.',
  items: [
    { icon: 'book' as IconName, label: 'Guías de 1 minuto' },
    { icon: 'play' as IconName, label: 'Videos cortos, sin sonido' },
    { icon: 'question' as IconName, label: 'Preguntas frecuentes' },
    { icon: 'users' as IconName, label: 'Comunidad con seudónimo' },
    { icon: 'mail' as IconName, label: 'Contacto con número de caso' },
    { icon: 'openbook' as IconName, label: 'Libro de Reclamaciones' },
  ],
};

export interface Principle { icon: IconName; title: string; text: string; }
export const PRINCIPLES: Principle[] = [
  { icon: 'shield', title: 'No pedimos tu diagnóstico', text: 'No necesitas cuenta ni decir qué condición tienes. Tus ajustes se guardan solo en tu equipo.' },
  { icon: 'sparkle', title: 'IA transparente', text: 'Cada resumen avisa que lo hizo una IA y te deja ver de qué parte de la noticia sale.' },
  { icon: 'undo', title: 'Tú tienes el control', text: 'Nada se activa solo. Cada cambio se puede deshacer y volver como estaba.' },
  { icon: 'check', title: 'Diseñado con personas reales', text: 'Nace de entrevistas y pruebas con lectores neurodivergentes, y de las pautas de accesibilidad WCAG.' },
];

export const CTA = {
  title: 'Pruébalo en una noticia',
  text: 'El demo funciona en el celular y en la computadora. Notín te enseña lo básico en menos de un minuto.',
  button: 'Abrir el demo',
};

export const FOOTER = {
  team: ['Carlos Ramirez Cuentas', 'Paulo Herrera Macahuachi'],
  course: 'Interacción Humano Computador · USIL',
  note: 'Prototipo académico. No está afiliado a ningún diario.',
};
