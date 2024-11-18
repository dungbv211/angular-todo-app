import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, MatTabsModule],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css',
})
export class ArticleDetailComponent implements OnInit {
  categories$: Observable<any> | undefined;
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categories$ = this.apiService.getBuckets();
  }
}
