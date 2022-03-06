import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { SharedModule } from '../shared/shared.module';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/answer/answer.component';
import { ResultComponent } from './components/result/result.component';
import { LeaveQuizConfirmationComponent } from './components/leave-quiz-confirmation/leave-quiz-confirmation.component';
import { DeactivateGuard } from './deactivate.guard';


@NgModule({
  declarations: [
    QuizComponent,
    QuestionComponent,
    AnswerComponent,
    ResultComponent,
    LeaveQuizConfirmationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    QuizRoutingModule,
  ],
  providers: [
    DeactivateGuard
  ]
})
export class QuizModule { }
