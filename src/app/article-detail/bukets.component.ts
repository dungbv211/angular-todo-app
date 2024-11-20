import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import { ApiService } from '../service';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [MatTabsModule, ReactiveFormsModule, AsyncPipe, JsonPipe],
  templateUrl: './buckets.component.html',
})
export class ArticleDetailComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl('test-titleas'),
    public: new FormControl(true),
  });
  categories: Observable<any> | undefined;
  apiService = inject(ApiService);
  ngOnInit() {
    this.fetchCategories();
  }
  onSubmit() {
    this.apiService.postBucket(this.form.value).subscribe();
  }

  fetchCategories() {
    this.categories = this.apiService.getBuckets();
  }
}
