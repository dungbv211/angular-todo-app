import { Routes } from '@angular/router';
import { LoginPage } from './component/Login/LoginPage';
import { ProfilePage } from './component/Profile/ProfilePage';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { TabGroupComponent } from './component/tabs/tab-group';
import { ArticleDetailComponent } from './article-detail/bukets.component';
import { SignUpPage } from './component/sign-up/signUp';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpPage },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'create-app',
    component: ProfilePage,
  },
  { path: 'author', component: AuthorListComponent },
  { path: 'tabs', component: TabGroupComponent },
  { path: 'article', component: ArticleDetailComponent },
];
