import { Injectable } from '@angular/core';
import { MainPersonalityTrait } from '../types/main-personality-trait';
import mockPersonalityMatches from './mockPersonalityMatches';

@Injectable({
  providedIn: 'root',
})
export class PersonalityService {
  public determinePersonalityTrait(
    averagePersonalityScore: number
  ): MainPersonalityTrait | undefined {
    const personalityMatch = mockPersonalityMatches.find(
      (match) =>
        match?.minScore <= averagePersonalityScore &&
        match?.maxScore >= averagePersonalityScore
    );
    return personalityMatch?.personalityTrait;
  }
}
