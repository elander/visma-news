import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentNewsComponent } from './entertainment-news.component';
import { NewsapiService } from '../services/newsapi.service';
import { fakeNews } from '../../testhelpers/fakeNews';
import { of } from 'rxjs';

describe('EntertainmentNewsComponent', () => {
  let component: EntertainmentNewsComponent;
  let fixture: ComponentFixture<EntertainmentNewsComponent>;
  let fakeService: NewsapiService;

  beforeEach(async () => {
    fakeService = jasmine.createSpyObj<NewsapiService>(
      'NewsApiService', {
        entertainmentHeadLines: of(fakeNews),
      });
    await TestBed.configureTestingModule({
      declarations: [ EntertainmentNewsComponent ],
      providers: [{provide: NewsapiService, useValue: fakeService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntertainmentNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('retrieves the entertainment news', () => {
    expect(component.headlinesData).toEqual(fakeNews.articles);
  })
  it('renders news on the page', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h5').textContent).toContain('Excitement');
  });

});
