import { Component, input } from '@angular/core';
import { ExperienceEntry } from '../../core/models/portfolio.model';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [ScrollRevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly entries = input.required<ExperienceEntry[]>();
}
