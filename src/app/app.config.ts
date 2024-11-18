import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi
} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { AuthService } from './auth.service';
import { loggingInterceptor } from './middlerware';
import { IsAdultPipe } from './pipe';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    // provideHttpClient(withInterceptorsFromDi()),
    provideHttpClient(withFetch()),
    { provide: HTTP_INTERCEPTORS, useClass: loggingInterceptor, multi: true },
    IsAdultPipe, provideClientHydration(),
  ],
};
