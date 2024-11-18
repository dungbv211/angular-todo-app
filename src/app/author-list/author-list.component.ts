import { Component, OnInit } from '@angular/core';
import { AuthorDetailComponent } from '../author-detail/author-detail.component';
import { NgFor } from '@angular/common';
import { Author } from '../author';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-author-list',
  standalone: true,
  template: `<app-author-detail
      *ngFor="let author of authors"
      [author]="author"
      (deleteAuthor)="handleDelete($event)"
    ></app-author-detail>
    <p>Your name: {{ name }}</p>
    <input type="text" [(ngModel)]="name" />
    `,
  imports: [AuthorDetailComponent, NgFor, FormsModule],
})
export class AuthorListComponent implements OnInit {
  name = 'name';
  authors = [
    {
      id: 1,
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'email',
      gender: 'gender',
      ipAddress: 'ipAddress',
    },
    {
      id: 2,
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'email',
      gender: 'gender',
      ipAddress: 'ipAddress',
    },
  ];
  constructor() {}
  ngOnInit() {}
  handleDelete(author: Author) {
    this.authors = this.authors.filter((item) => item.id !== author.id);
  }
}
