import { Component, OnInit } from '@angular/core';

import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor(private api: NewsapiService) { }

  headlinesData: any[] = [];

  ngOnInit(): void {
    this.api.categoryHeadLines('technology').subscribe(result => {
      this.headlinesData = result.articles;
    });
  }

}
