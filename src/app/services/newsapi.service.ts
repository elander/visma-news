import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http: HttpClient) { }

  //technology
  techNews='https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=93db02f9184b418b957e511a5733c46a';
  //top
  topNews='https://newsapi.org/v2/top-headlines?country=us&apiKey=93db02f9184b418b957e511a5733c46a';
  //science
  scienceNews='https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=93db02f9184b418b957e511a5733c46a';
  //entertainment
  entertainmentNews='https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=93db02f9184b418b957e511a5733c46a';

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
  
  
  

}
