import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'quiz-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question$ = this.quizService.state$.pipe(map(state => state.questions[state.currentQuestionIdx]));
  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
  }

}
