import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http: HttpClient) { }

  //technology
  techNews='https://newsapi.org/v2/top-headlines?country=us&apiKey=93db02f9184b418b957e511a5733c46a&category=technology';
  //top
  topNews='https://newsapi.org/v2/top-headlines?country=us&apiKey=93db02f9184b418b957e511a5733c46a';
  //science
  scienceNews='https://newsapi.org/v2/top-headlines?country=us&apiKey=93db02f9184b418b957e511a5733c46a&category=science';
  //entertainment
  entertainmentNews='https://newsapi.org/v2/top-headlines?country=us&apiKey=93db02f9184b418b957e511a5733c46a&category=entertainment';

  topHeadLines(): Observable<any>{
    return this._http.get(this.topNews);
  }
  
  techHeadLines(): Observable<any>{
    return this._http.get(this.techNews);
  }

  scienceHeadLines(): Observable<any>{
    return this._http.get(this.scienceNews);
  }

  entertainmentHeadLines(): Observable<any>{
    return this._http.get(this.entertainmentNews);
  }
  
  categoryHeadLines(category: string): Observable<any> {
    const url = this.topNews.concat(`&category=${category}`);
    return this._http.get(url);
  }
  

}
