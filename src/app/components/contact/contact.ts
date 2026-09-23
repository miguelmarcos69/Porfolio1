import { Component, input } from '@angular/core';
import { Profile } from '../../core/models/portfolio.model';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [ScrollRevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly profile = input.required<Profile>();
}
