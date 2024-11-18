import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IsAdultPipe } from './pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, IsAdultPipe],
  providers: [provideHttpClient()],
})
export class AppModule {}
