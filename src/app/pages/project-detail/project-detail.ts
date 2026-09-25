import { Component, computed, effect, inject, input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { DeviceDemo } from '../../components/device-demo/device-demo';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, DeviceDemo],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  private readonly data = inject(PortfolioDataService);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);

  readonly slug = input.required<string>();

  protected readonly project = computed(() => this.data.getProjectBySlug(this.slug()));

  constructor() {
    effect(() => {
      const project = this.project();
      if (!project) {
        this.router.navigateByUrl('/no-encontrado', { skipLocationChange: true });
        return;
      }
      this.title.setTitle(`${project.name} — Miguel Marcos`);
      this.meta.updateTag({ name: 'description', content: project.description });
    });
  }
}
