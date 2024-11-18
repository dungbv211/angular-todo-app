import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}

@Component({
  selector: 'app-author-detail',
  standalone: true,
  template: `
    <div *ngIf="author" class="relative w-20">
      <span>{{ author.firstName }} {{ author.lastName }}</span>
      <button class="absolute -top-1 right-0" (click)="handleDelete()">
        x
      </button>
    </div>
  `,
  styles: [``],
  imports: [CommonModule],
})
export class AuthorDetailComponent implements OnInit {
  @Input() author!: Author;
  @Output() deleteAuthor = new EventEmitter<Author>();
  constructor() {}
  ngOnInit() {}

  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }
}
