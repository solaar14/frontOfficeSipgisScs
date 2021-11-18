import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDimesnionComponent } from './liste-dimesnion.component';

describe('ListeDimesnionComponent', () => {
  let component: ListeDimesnionComponent;
  let fixture: ComponentFixture<ListeDimesnionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDimesnionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDimesnionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
