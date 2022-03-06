import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveQuizConfirmationComponent } from './leave-quiz-confirmation.component';

describe('LeaveQuizConfirmationComponent', () => {
  let component: LeaveQuizConfirmationComponent;
  let fixture: ComponentFixture<LeaveQuizConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveQuizConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveQuizConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
