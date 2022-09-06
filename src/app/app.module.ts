import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TopNewsComponent } from './top-news/top-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { ScienceNewsComponent } from './science-news/science-news.component';
import { EntertainmentNewsComponent } from './entertainment-news/entertainment-news.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNewsComponent,
    TechNewsComponent,
    ScienceNewsComponent,
    EntertainmentNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
