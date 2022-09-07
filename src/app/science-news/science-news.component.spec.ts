import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeNewsapiService } from '../services/fakeNewsApiService';
import { NewsapiService } from '../services/newsapi.service';
import { ScienceNewsComponent } from './science-news.component';
import {fakeNews} from '../../testhelpers/fakeNews';

describe('ScienceNewsComponent', () => {
  let component: ScienceNewsComponent;
  let fixture: ComponentFixture<ScienceNewsComponent>;
  let fakeService: NewsapiService;

  beforeEach(async () => {
    fakeService = new FakeNewsapiService as NewsapiService;
    await TestBed.configureTestingModule({
      declarations: [ ScienceNewsComponent ],
      providers: [{provide: NewsapiService, useValue: fakeService}]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ScienceNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('retrieves science news', () =>{
    expect(component.headlinesData).toEqual(fakeNews.articles);
  })
});
