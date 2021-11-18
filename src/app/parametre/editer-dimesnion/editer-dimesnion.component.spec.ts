import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerDimesnionComponent } from './editer-dimesnion.component';

describe('EditerDimesnionComponent', () => {
  let component: EditerDimesnionComponent;
  let fixture: ComponentFixture<EditerDimesnionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditerDimesnionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerDimesnionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
