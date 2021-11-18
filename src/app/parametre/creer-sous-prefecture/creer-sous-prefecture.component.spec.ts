import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerSousPrefectureComponent } from './creer-sous-prefecture.component';

describe('CreerSousPrefectureComponent', () => {
  let component: CreerSousPrefectureComponent;
  let fixture: ComponentFixture<CreerSousPrefectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerSousPrefectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerSousPrefectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
