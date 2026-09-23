import { Component, input } from '@angular/core';
import { EducationEntry } from '../../core/models/portfolio.model';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-education',
  imports: [ScrollRevealDirective],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  readonly entries = input.required<EducationEntry[]>();
}
