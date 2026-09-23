import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { About } from '../../components/about/about';
import { Contact } from '../../components/contact/contact';
import { Education } from '../../components/education/education';
import { Experience } from '../../components/experience/experience';
import { Hero } from '../../components/hero/hero';
import { Skills } from '../../components/skills/skills';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Experience, Skills, Education, Contact],
  templateUrl: './home.html',
})
export class Home {
  private readonly data = inject(PortfolioDataService);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  protected readonly profile = this.data.getProfile();
  protected readonly experience = this.data.getExperience();
  protected readonly skillGroups = this.data.getSkillGroups();
  protected readonly softSkills = this.data.getSoftSkills();
  protected readonly education = this.data.getEducation();

  constructor() {
    this.title.setTitle(`${this.profile.name} — ${this.profile.role}`);
    this.meta.updateTag({ name: 'description', content: this.profile.tagline });
  }
}
