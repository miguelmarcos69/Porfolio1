import { RenderMode, ServerRoute } from '@angular/ssr';
import { PROJECTS } from './core/data/portfolio-data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'proyectos',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'proyectos/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return PROJECTS.map((project) => ({ slug: project.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
