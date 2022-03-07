import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { MainPersonalityTrait } from '../types/main-personality-trait';
import { PersonalityMatch } from '../types/personality-match';
import { QuizService } from './quiz.service';

@Injectable()
export class PersonalityService {
  private personalityMatches$ = this.http
    .get<PersonalityMatch[]>('/assets/mock/personalityMatches.json')
    .pipe(shareReplay(1));

  constructor(private http: HttpClient, private quizService: QuizService) {}


  public getAveragePersonalityScore(): number{
    const {quizScore, questions} = this.quizService.getState();
    return Math.floor(quizScore / questions.length);
  }

  public determinePersonalityTrait(
  ): Observable<MainPersonalityTrait | undefined> {

    const averagePersonalityScore = this.getAveragePersonalityScore();

    return this.personalityMatches$.pipe(
      map((matches) => {
        const personalityMatch = matches.find(
          (match) =>
            match?.minScore <= averagePersonalityScore &&
            match?.maxScore >= averagePersonalityScore
        );
        return personalityMatch?.personalityTrait;
      })
    );
  }
}
