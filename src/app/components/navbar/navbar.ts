import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';

interface NavLink {
  label: string;
  icon: string;
  route: string[];
  fragment?: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private readonly themeService = inject(ThemeService);

  protected readonly theme = this.themeService.theme;
  protected readonly isOpen = signal(false);

  protected readonly links: NavLink[] = [
    { label: 'Sobre mí', icon: 'bi-person-badge-fill', route: ['/'], fragment: 'sobre-mi' },
    { label: 'Experiencia', icon: 'bi-briefcase-fill', route: ['/'], fragment: 'experiencia' },
    { label: 'Proyectos', icon: 'bi-kanban-fill', route: ['/proyectos'] },
    { label: 'Habilidades', icon: 'bi-stars', route: ['/'], fragment: 'habilidades' },
    { label: 'Contacto', icon: 'bi-chat-dots-fill', route: ['/'], fragment: 'contacto' },
  ];

  toggleMenu(): void {
    this.isOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isOpen.set(false);
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }
}
