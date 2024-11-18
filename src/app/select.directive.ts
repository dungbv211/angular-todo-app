import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSelect]',
  standalone: true,
})
export class SelectDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private ViewContainerRef: ViewContainerRef
  ) {}
}
