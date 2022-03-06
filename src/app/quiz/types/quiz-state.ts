import { QuizQuestion } from "./quiz-question";
import { QuizQuestionAnswer } from "./quiz-question-answer";

export interface QuizState {
    questions: QuizQuestion[],
    currentQuestionIdx: number,
    showResults: boolean;
    currentQuestionAnswers: QuizQuestionAnswer[]
}
