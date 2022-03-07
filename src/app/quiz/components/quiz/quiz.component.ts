import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  providers: [QuizService],
  animations: [
    trigger('nextQuestionAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(
          ':enter',
          [
            style({ opacity: 0, width: 0 }),
            stagger(50, [
              animate('400ms ease-out', style({ opacity: 1, width: '*' })),
            ]),
          ],
          { optional: true }
        ),
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('400ms ease-out', style({ opacity: 0, width: 0 })),
          ]),
        ]),
      ]),
    ]),
    trigger('enterQuizResultsAnimation', [
      transition(':enter', [
        query(
          ':enter',
          [
            style({ opacity: 0, width: 0 }),
            stagger(50, [
              animate('300ms ease-out', style({ opacity: 1, width: '*' })),
            ]),
          ],
          { optional: true }
        ),
      ]),
      
    ]),
  ],
})
export class QuizComponent {
  questionLength$ = this.quizService.state$.pipe(
    map((state) => state.questions.length)
  );

  currentQuestionCounter$ = this.quizService.state$.pipe(
    map((state) => state.currentQuestionIdx + 1)
  );

  showResults$ = this.quizService.state$.pipe(
    map((state) => state.showResults)
  );

  selectedAnswerIdx$ = this.quizService.state$.pipe(
    map((state) => state.currentQuestionAnswerIdx)
  );

  quizScore$ = this.quizService.state$.pipe(map((state) => state.quizScore));

  constructor(private quizService: QuizService) {}

  canDeactivate():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.quizService.state$.getValue().currentQuestionIdx === 0;
  }

  nextQuestion(): void {
    this.quizService.nextQuestion();
  }

  restart(): void {
    this.quizService.restart();
  }
}
