import { Injectable } from '@angular/core';
import { MainPersonalityTrait } from '../types/main-personality-trait';
import { QuizQuestion } from '../types/quiz-question';
import mockPersonalityMatches from './mockPersonalityMatches';
import { PersonalityMatch } from '../types/personality-match';

@Injectable({
  providedIn: 'root',
})
export class PersonalityService {
  public determinePersonalityTrait(
    averagePersonalityScore: number
  ): MainPersonalityTrait | undefined {
    console.warn(averagePersonalityScore)
    const personalityMatch = mockPersonalityMatches.find(
      (match) =>
        match?.minScore <= averagePersonalityScore &&
        match?.maxScore >= averagePersonalityScore
    );
    return personalityMatch?.personalityTrait;
  }
}
