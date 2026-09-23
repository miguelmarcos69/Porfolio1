import { TestBed } from '@angular/core/testing';
import { PortfolioDataService } from './portfolio-data.service';

describe('PortfolioDataService', () => {
  let service: PortfolioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioDataService);
  });

  it('returns a project by slug', () => {
    const project = service.getProjectBySlug('arduilock');
    expect(project?.name).toBe('Arduilock');
  });

  it('returns undefined for an unknown slug', () => {
    expect(service.getProjectBySlug('no-existe')).toBeUndefined();
  });

  it('exposes the profile with real contact data', () => {
    const profile = service.getProfile();
    expect(profile.email).toBe('mmprc69@gmail.com');
  });
});
