import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  questionLength$ = this.quizService.state$.pipe(
    map((state) => state.questions.length)
  );
  currentQuestionCounter$ = this.quizService.state$.pipe(
    map((state) => state.currentQuestionIdx + 1)
  );

  showResults$ = this.quizService.state$.pipe(map(state => state.showResults))
  constructor(private quizService: QuizService) {}

  nextQuestion(): void {
    this.quizService.nextQuestion();
  }

  restart(): void {
    this.quizService.restart();
  }
  ngOnInit(): void {}
}
