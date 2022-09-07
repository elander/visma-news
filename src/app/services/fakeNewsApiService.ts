import { Observable, of } from "rxjs";

import { Injectable } from "@angular/core";
import { fakeNews } from "src/testhelpers/fakeNews";

@Injectable({
    providedIn: 'root'
  })
  export class FakeNewsapiService {
    // Don't inject HttpClient!
    // We don't need it here,
    // and it only complicates
    // testing, as it introduces
    // dependencies in two layers!
    constructor() {}

    //technology
  techNews='';
  //top
  topNews='';
  //science
  scienceNews='';
  //entertainment
  entertainmentNews='';

  topHeadLines(): Observable<any>{
    return of(fakeNews);
  }
  
  techHeadLines(): Observable<any>{
    return of(fakeNews);
  }

  scienceHeadLines(): Observable<any>{
    return of(fakeNews);
  }

  entertainmentHeadLines(): Observable<any>{
    return of(fakeNews);
  }
  
  categoryHeadLines(category: string): Observable<any> {
    return of(fakeNews);
  }
  
  }