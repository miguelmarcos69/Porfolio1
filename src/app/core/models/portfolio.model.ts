export interface ContactLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  about: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  location: string;
  linkedin: string;
}

export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  dateRange: string;
  highlights: string[];
}

export interface Project {
  slug: string;
  name: string;
  tag: string;
  icon: string;
  description: string;
  longDescription: string;
  stack: string[];
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: string[];
}

export interface EducationEntry {
  title: string;
  institution: string;
  dateRange: string;
}
