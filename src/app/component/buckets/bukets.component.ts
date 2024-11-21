import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { map, Observable } from 'rxjs';
import { ApiService } from '../../service';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatButtonModule,
    AsyncPipe,
    JsonPipe,
    CommonModule,
  ],
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
    this.categories = this.apiService.getBuckets().pipe(
      map(response => response.data)
    );
  }
}
