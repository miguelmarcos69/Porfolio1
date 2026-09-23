import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Projects } from '../../components/projects/projects';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-projects-page',
  imports: [Projects],
  templateUrl: './projects-page.html',
})
export class ProjectsPage {
  private readonly data = inject(PortfolioDataService);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  protected readonly projects = this.data.getProjects();

  constructor() {
    this.title.setTitle('Proyectos — Miguel Marcos');
    this.meta.updateTag({
      name: 'description',
      content: 'Proyectos de desarrollo de software de Miguel Marcos: aplicaciones móviles, web e IoT.',
    });
  }
}
