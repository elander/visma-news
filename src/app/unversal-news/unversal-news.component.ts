import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-unversal-news',
  templateUrl: './unversal-news.component.html',
  styleUrls: ['./unversal-news.component.css']
})
export class UnversalNewsComponent implements OnInit {
  category: string ='';

  constructor(private api: NewsapiService, private ourPath: ActivatedRoute) { 
    this.ourPath.params.subscribe(params => {
      this.category = params['category'];
      if(this.category !== '') {
        console.log(this.category);
      this.api.categoryHeadLines(this.category).subscribe(result => {
        console.log(result);
           //          ^?
          
  
        this.headlinesData = result.articles;
      
      });
    }
    });
  }

  headlinesData: any[] = [];

  ngOnInit(): void {
  }

}
