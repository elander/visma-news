import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnversalNewsComponent } from './unversal-news.component';

xdescribe('UnversalNewsComponent', () => {
  let component: UnversalNewsComponent;
  let fixture: ComponentFixture<UnversalNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnversalNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnversalNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
