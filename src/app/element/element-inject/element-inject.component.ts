import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-element-inject',
  standalone: true,
  imports: [],
  templateUrl: './element-inject.component.html',
  styleUrl: './element-inject.component.css',
})
export class ElementInjectComponent {
  @Input() elementId: string | undefined;
}
