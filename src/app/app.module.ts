import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common'; 
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,

  ],

  imports: [
    BrowserModule,
    CommonModule,


  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
