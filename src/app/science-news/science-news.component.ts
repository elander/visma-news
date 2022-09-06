import { Component, OnInit } from '@angular/core';

import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-science-news',
  templateUrl: './science-news.component.html',
  styleUrls: ['./science-news.component.css']
})
export class ScienceNewsComponent implements OnInit {

  constructor(private api: NewsapiService) { }

  headlinesData: any[] = [];

  ngOnInit(): void {
    this.api.scienceHeadLines().subscribe(result => {
      // console.log(result);
      this.headlinesData = result.articles;
    });
  }

}
