import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFindPageComponent } from './not-find-page.component';

describe('NotFindPageComponent', () => {
  let component: NotFindPageComponent;
  let fixture: ComponentFixture<NotFindPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFindPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFindPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
