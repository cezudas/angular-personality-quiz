import { Component, HostBinding, Input, OnInit, HostListener } from '@angular/core';
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
  @HostBinding('class.selected')
  selected!: boolean;

  @Input()
  data!: QuizQuestionAnswer;


  text$ = this.quizService.state$.pipe(map(state => state.currentQuestionAnswers[this.index]?.answerText));
  letter!: string;

  constructor(private quizService: QuizService) { }

  @HostListener('click', ['$event.target'])
  onClick() {
    this.quizService.selectAnswer(this.index);
  }

  ngOnInit(): void {
    this.letter = String.fromCharCode(65 + this.index)
  }
}
