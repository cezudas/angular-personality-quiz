import { QuizQuestionAnswer } from "./quiz-question-answer";

export interface QuizQuestion {
    questionText: string;
    answers: QuizQuestionAnswer[];
}
