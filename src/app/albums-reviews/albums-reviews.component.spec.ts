import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsReviewsComponent } from './albums-reviews.component';

describe('AlbumsReviewsComponent', () => {
  let component: AlbumsReviewsComponent;
  let fixture: ComponentFixture<AlbumsReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
