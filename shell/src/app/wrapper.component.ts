import { AfterContentInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { registry } from './registry';

@Component({
  template: '<div #vc></div>',
})
export class WrapperComponent implements AfterContentInit {
  @ViewChild('vc', { read: ElementRef, static: true })
  vc!: ElementRef;
  module: any;

  constructor(private renderer: Renderer2, private route: ActivatedRoute) {}

  ngAfterContentInit(): void {
    const elementName = this.route.snapshot.data['elementName'];
    const importName = this.route.snapshot.data['importName'];
    if (!this.module) {
      const importFn = registry[importName];
      importFn()
        .then((m: any) => {
          console.debug(`element ${elementName} loaded!`);
          this.module = m;
        })
        .catch((err: any) => console.error(`error loading ${elementName}:`, err));
    }
    const element = this.renderer.createElement(elementName) as HTMLElement;
    this.renderer.appendChild(this.vc.nativeElement, element);
  }
}
