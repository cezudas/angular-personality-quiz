import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {
  questionLength$ = this.quizService.state$.pipe(
    map((state) => state.questions.length)
  );

  currentQuestionCounter$ = this.quizService.state$.pipe(
    map((state) => state.currentQuestionIdx + 1)
  );

  showResults$ = this.quizService.state$.pipe(map(state => state.showResults))

  selectedAnswerIdx$ = this.quizService.state$.pipe(map(state => state.currentQuestionAnswerIdx));

  quizScore$ = this.quizService.state$.pipe(map(state => state.quizScore))
  
  constructor(private quizService: QuizService) {}

  nextQuestion(): void {
    this.quizService.nextQuestion();
  }

  restart(): void {
    this.quizService.restart();
  }
  ngOnInit(): void {}
}
