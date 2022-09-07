import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NewsapiService } from './newsapi.service';
import { TestBed } from '@angular/core/testing';
import { fakeNews } from '../../testhelpers/fakeNews';

describe('NewsapiService', () => {
  let service: NewsapiService;
  let httpController: HttpTestingController;

  let techNews='https://newsapi.org/v2/top-headlines?country=us&apiKey=93db02f9184b418b957e511a5733c46a&category=technology';


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(NewsapiService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('retrieves technews', () => {
    service.techHeadLines().subscribe(res => {
      expect(res).toEqual(fakeNews);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: techNews,
    });

    req.flush(fakeNews);

  })
  it('retrieves categorynews', () => {
    service.categoryHeadLines('technology').subscribe(res => {
      expect(res).toEqual(fakeNews);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: techNews,
    });

    req.flush(fakeNews);

  })
});
