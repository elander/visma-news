import { Component, OnInit } from '@angular/core';

import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {

  constructor(private api: NewsapiService) { }

  headlinesData: any[] = [];

  ngOnInit(): void {
    this.api.topHeadLines().subscribe(result => {
      // console.log(result);
      this.headlinesData = result.articles;
    });
  }

}
