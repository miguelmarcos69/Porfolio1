import { Component, ElementRef, computed, inject, input, signal, viewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProjectDemo } from '../../core/models/portfolio.model';

@Component({
  selector: 'app-device-demo',
  templateUrl: './device-demo.html',
  styleUrl: './device-demo.scss',
})
export class DeviceDemo {
  private readonly sanitizer = inject(DomSanitizer);

  readonly demo = input.required<ProjectDemo>();
  readonly name = input.required<string>();

  private readonly frame = viewChild<ElementRef<HTMLIFrameElement>>('frame');

  // La URL sale de nuestros propios datos (PROJECTS), no de entrada de usuario.
  protected readonly safeUrl = computed(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(this.demo().url),
  );

  protected readonly loaded = signal(false);

  protected reload(): void {
    const frame = this.frame()?.nativeElement;
    if (!frame) return;
    this.loaded.set(false);
    frame.src = this.demo().url;
  }
}
