import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { ProjectDetail } from './pages/project-detail/project-detail';
import { ProjectsPage } from './pages/projects-page/projects-page';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'proyectos', component: ProjectsPage },
  { path: 'proyectos/:slug', component: ProjectDetail },
  { path: 'no-encontrado', component: NotFound },
  { path: '**', component: NotFound },
];
