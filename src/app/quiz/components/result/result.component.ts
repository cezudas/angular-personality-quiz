import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalityService } from '../../services/personality.service';
import { QuizService } from '../../services/quiz.service';
import { MainPersonalityTrait } from '../../types/main-personality-trait';

@Component({
  selector: 'quiz-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent implements OnInit {
  constructor(
    private personalityService: PersonalityService,
    private quizService: QuizService
  ) {}


  public personalityTraitResult$!: Observable<MainPersonalityTrait | undefined>;
  public personalityScoreResult!: number;

  ngOnInit(): void {
    this.personalityTraitResult$ = this.personalityService.determinePersonalityTrait();
    this.personalityScoreResult = this.personalityService.getAveragePersonalityScore();
  }

  restart(): void {
    this.quizService.restart();
  }
}
