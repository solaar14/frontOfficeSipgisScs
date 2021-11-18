import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerDimesnionComponent } from './creer-dimesnion.component';

describe('CreerDimesnionComponent', () => {
  let component: CreerDimesnionComponent;
  let fixture: ComponentFixture<CreerDimesnionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerDimesnionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerDimesnionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
