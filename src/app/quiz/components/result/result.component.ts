import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'quiz-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultComponent {

  constructor( private quizService: QuizService) {}

  personalityTraitResult$ = this.quizService.state$.pipe(map(state => state.personalityTraitResult))
  personalityScoreResult$ = this.quizService.state$.pipe(map(state => state.quizScore));
}
