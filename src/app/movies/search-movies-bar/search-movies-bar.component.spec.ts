import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMoviesBarComponent } from './search-movies-bar.component';

describe('SearchMoviesBarComponent', () => {
  let component: SearchMoviesBarComponent;
  let fixture: ComponentFixture<SearchMoviesBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMoviesBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMoviesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
