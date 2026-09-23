import { Component, input } from '@angular/core';
import { SkillGroup } from '../../core/models/portfolio.model';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [ScrollRevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly groups = input.required<SkillGroup[]>();
  readonly softSkills = input.required<string>();
}
