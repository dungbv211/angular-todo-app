import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { HeaderApp } from './component/header/header';
import { FooterApp } from './component/footer/footer';
import { ApiService } from './service';

@Component({
  selector: 'app-root',
  standalone: true,
  // template: ` <header-app />
  //   <main class="main min-h-screen">
  //     <router-outlet></router-outlet>
  //   </main>
  //   <footer-app />`,
  templateUrl: './app.component.html',
  imports: [RouterModule, RouterLink, HeaderApp, FooterApp],
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent {
  title = 'angular-app';
  providers = [{provide: 'header-app', deps: [
    ApiService, // This is a provider dependency
    { provide: 'EXTRA_PARAM', useValue: 'some extra value' } // This is an inline provider in deps
  ]
}];
}
