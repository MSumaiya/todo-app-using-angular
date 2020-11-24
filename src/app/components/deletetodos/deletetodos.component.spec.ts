import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetodosComponent } from './deletetodos.component';

describe('DeletetodosComponent', () => {
  let component: DeletetodosComponent;
  let fixture: ComponentFixture<DeletetodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletetodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
