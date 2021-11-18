import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSousPrefectureComponent } from './liste-sous-prefecture.component';

describe('ListeSousPrefectureComponent', () => {
  let component: ListeSousPrefectureComponent;
  let fixture: ComponentFixture<ListeSousPrefectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSousPrefectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSousPrefectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
