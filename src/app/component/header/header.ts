import { Component } from '@angular/core';
import { ElementInjectComponent } from '../../element/element-inject/element-inject.component';

@Component({
  selector: 'header-app',
  standalone: true,
  template: `<div>this is header of my app</div> <app-element-inject>header</app-element-inject>`,
  imports: [ElementInjectComponent],
})
export class HeaderApp {
}
