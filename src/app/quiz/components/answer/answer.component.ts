import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { QuizService } from '../../services/quiz.service';
import { QuizQuestionAnswer } from '../../types/quiz-question-answer';

@Component({
  selector: 'quiz-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  @Input()
  index!: number;

  @Input()
  data!: QuizQuestionAnswer;

  text$ = this.quizService.state$.pipe(map(state => state.currentQuestionAnswers[this.index].answerText));
  constructor(private quizService: QuizService) { }

  letter!: string;

  ngOnInit(): void {
    this.letter = String.fromCharCode(65 + this.index)
  }

}
