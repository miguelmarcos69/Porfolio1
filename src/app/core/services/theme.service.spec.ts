import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('toggles between light and dark', () => {
    const initial = service.theme();
    service.toggle();
    expect(service.theme()).not.toBe(initial);
    service.toggle();
    expect(service.theme()).toBe(initial);
  });

  it('applies the theme to the document element', () => {
    service.setTheme('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    service.setTheme('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });
});
