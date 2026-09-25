import {
  EducationEntry,
  ExperienceEntry,
  Profile,
  Project,
  SkillGroup,
} from '../models/portfolio.model';

export const PROFILE: Profile = {
  name: 'Miguel Marcos',
  role: 'Frontend Developer · Angular Developer',
  tagline:
    'Construyo interfaces web y móviles con Angular 19, TypeScript y arquitecturas reactivas (Signals, RxJS), integrando APIs REST sobre .NET. Más de 4 años llevando producto desde el diseño hasta producción.',
  about:
    'Soy desarrollador frontend especializado en Angular, con más de 4 años de experiencia en aplicaciones web y móviles híbridas. Trabajo con Angular 19, TypeScript, Ionic, Capacitor, Firebase e integración de APIs REST sobre entornos .NET, creando interfaces modernas, escalables y orientadas a la experiencia de usuario con Clean Code y arquitecturas mantenibles. También aplico inteligencia artificial al desarrollo de software mediante herramientas avanzadas de asistencia a la programación, además de consultas SQL, análisis de datos y colaboración en entornos DevOps.',
  email: 'mmprc69@gmail.com',
  phone: '667697116',
  phoneDisplay: '667 697 116',
  location: 'Paredes de Nava, Palencia',
  linkedin: 'https://www.linkedin.com/in/miguel-marcos-326992168',
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    title: 'Desarrollador Frontend Angular',
    company: 'ICON Multimedia',
    location: 'Palencia, España',
    dateRange: 'Mayo 2025 — Actualidad',
    highlights: [
      'Desarrollo de aplicaciones web con Angular 19 y TypeScript.',
      'Implementación de arquitecturas reactivas con Signals, RxJS y RxResource.',
      'Diseño de interfaces modernas y orientadas a la experiencia de usuario.',
      'Integración de APIs REST sobre entornos .NET.',
      'Aplicación de Clean Code y componentes reutilizables.',
      'Uso de IA (Claude Code) para acelerar análisis, desarrollo y refactorización.',
      'Consultas SQL y colaboración en procesos DevOps.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Omesa Informática SL',
    location: 'Palencia, España',
    dateRange: 'Marzo 2022 — Mayo 2025',
    highlights: [
      'Desarrollo de aplicaciones móviles híbridas con Angular, Ionic y Capacitor.',
      'Integración de servicios Firebase.',
      'Publicación y mantenimiento en Google Play Store y Apple App Store.',
      'Desarrollo de nuevas funcionalidades y resolución de incidencias.',
      'Trabajo en equipos ágiles y mejora continua de productos software.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: 'arduilock',
    name: 'Arduilock',
    tag: 'Domótica / IoT',
    icon: 'bi-cpu-fill',
    description:
      'Proyecto de fin del Grado Superior en Administración de Sistemas Informáticos en Red: automatizar una casa completa desde el móvil o el ordenador, al estilo de Google Home. Permite encender la luz por habitaciones, abrir ventanas y controlar la puerta del garaje mediante un sensor.',
    longDescription:
      'Arduilock nació como proyecto de fin del Grado Superior en Administración de Sistemas Informáticos en Red, con el objetivo de automatizar una casa completa desde el móvil o el ordenador, al estilo de Google Home. La aplicación permite encender la luz por habitaciones, abrir ventanas y controlar la puerta del garaje mediante un sensor, comunicándose con placas Arduino que gobiernan cada dispositivo físico de la casa.',
    stack: ['HTML', 'CSS', 'Node.js', 'JavaScript', 'Arduino Uno', 'Arduino Nano'],
  },
  {
    slug: 'app-restaurante',
    name: 'App de gestión de restaurante',
    tag: 'Angular / Ionic',
    icon: 'bi-shop',
    description:
      'Ecosistema completo para gestionar un restaurante: comandas en tiempo real con notificaciones entre sala y cocina, estadísticas de ventas y platos más pedidos de los últimos tres días, control de accesos por usuario, impresión de tickets en mesa y cobro desde el propio dispositivo.',
    longDescription:
      'Un ecosistema completo para gestionar un restaurante de principio a fin: comandas en tiempo real con notificaciones entre sala y cocina, estadísticas de ventas y platos más pedidos de los últimos tres días, control de accesos por usuario, impresión de tickets en mesa y cobro desde el propio dispositivo. Construida con Angular e Ionic para funcionar tanto en tablet como en móvil Android, con un backend de webservices desplegado en Hostinger.',
    stack: ['Angular', 'Ionic', 'Webservices', 'Hostinger', 'Android'],
    demo: {
      url: 'https://mmsv1.netlify.app/tabs/tab1',
      note: 'Demo de la interfaz. El backend está en desarrollo, así que algunas pantallas aún no muestran datos.',
    },
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend & Angular',
    icon: 'bi-code-slash',
    skills: ['Angular 19', 'TypeScript', 'RxJS', 'Signals', 'Ionic', 'Capacitor'],
  },
  { title: 'Backend & datos', icon: 'bi-database-fill', skills: ['.NET (APIs REST)', 'Firebase', 'SQL', 'Node.js'] },
  { title: 'Publicación', icon: 'bi-cloud-arrow-up-fill', skills: ['Google Play Store', 'App Store'] },
  { title: 'Hardware & IoT', icon: 'bi-cpu-fill', skills: ['Arduino', 'Sensores'] },
];

export const SOFT_SKILLS =
  'Trabajo en equipo, resolución de problemas y gestión de proyectos. Inglés a nivel básico.';

export const EDUCATION: EducationEntry[] = [
  {
    title: 'Ingeniería Informática',
    institution: 'UOC · A distancia',
    dateRange: '2024 — Actualidad',
  },
  {
    title: 'CFGS Desarrollo de Aplicaciones Multiplataforma (DAM)',
    institution: 'ILERNA FP · A distancia',
    dateRange: '2023 — 2024',
  },
  {
    title: 'CFGS Desarrollo de Aplicaciones Web (DAW)',
    institution: 'Camino de la Miranda · Palencia',
    dateRange: '2020 — 2022',
  },
  {
    title: 'CFGS Administración de Sistemas Informáticos en Red (ASIR)',
    institution: 'Centro Don Bosco · Villamuriel',
    dateRange: '2018 — 2020',
  },
];
