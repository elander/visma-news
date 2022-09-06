import { RouterModule, Routes } from '@angular/router';

import { EntertainmentNewsComponent } from './entertainment-news/entertainment-news.component';
import { NgModule } from '@angular/core';
import { ScienceNewsComponent } from './science-news/science-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { TopNewsComponent } from './top-news/top-news.component';

const routes: Routes = [
  {path: '', component: TopNewsComponent},
  {path: 'tech', component: TechNewsComponent},
  {path: 'science', component: ScienceNewsComponent},
  {path: 'entertainment', component: EntertainmentNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
