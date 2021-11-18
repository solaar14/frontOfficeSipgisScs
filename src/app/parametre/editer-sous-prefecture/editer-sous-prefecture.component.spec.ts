import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerSousPrefectureComponent } from './editer-sous-prefecture.component';

describe('EditerSousPrefectureComponent', () => {
  let component: EditerSousPrefectureComponent;
  let fixture: ComponentFixture<EditerSousPrefectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditerSousPrefectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerSousPrefectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
