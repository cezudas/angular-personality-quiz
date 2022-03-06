import { MainPersonalityTrait } from "./main-personality-trait";

export interface PersonalityMatch {
    minScore: number;
    maxScore: number;
    personalityTrait: MainPersonalityTrait
}
