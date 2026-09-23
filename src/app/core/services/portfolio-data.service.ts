import { Injectable } from '@angular/core';
import { EDUCATION, EXPERIENCE, PROFILE, PROJECTS, SKILL_GROUPS, SOFT_SKILLS } from '../data/portfolio-data';
import { EducationEntry, ExperienceEntry, Profile, Project, SkillGroup } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  getProfile(): Profile {
    return PROFILE;
  }

  getExperience(): ExperienceEntry[] {
    return EXPERIENCE;
  }

  getProjects(): Project[] {
    return PROJECTS;
  }

  getProjectBySlug(slug: string): Project | undefined {
    return PROJECTS.find((project) => project.slug === slug);
  }

  getSkillGroups(): SkillGroup[] {
    return SKILL_GROUPS;
  }

  getSoftSkills(): string {
    return SOFT_SKILLS;
  }

  getEducation(): EducationEntry[] {
    return EDUCATION;
  }
}
