import { Component, OnInit } from '@angular/core';

import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-entertainment-news',
  templateUrl: './entertainment-news.component.html',
  styleUrls: ['./entertainment-news.component.css']
})
export class EntertainmentNewsComponent implements OnInit {

  constructor(private api: NewsapiService) { }

  headlinesData: any[] = [];

  ngOnInit(): void {
    this.api.entertainmentHeadLines().subscribe(result => {
      // console.log(result);
      this.headlinesData = result.articles;
    });
  }

}
