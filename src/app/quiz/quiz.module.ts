import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { SharedModule } from '../shared/shared.module';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/answer/answer.component';


@NgModule({
  declarations: [
    QuizComponent,
    QuestionComponent,
    AnswerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    QuizRoutingModule,
  ]
})
export class QuizModule { }
