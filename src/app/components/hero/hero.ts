import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Profile } from '../../core/models/portfolio.model';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly profile = input.required<Profile>();
}
