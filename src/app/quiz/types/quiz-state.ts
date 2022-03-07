import { QuizQuestion } from "./quiz-question";
import { QuizQuestionAnswer } from "./quiz-question-answer";

export interface QuizState {
    questions: QuizQuestion[],
    showResults: boolean;
    currentQuestionIdx: number,
    currentQuestionAnswerIdx?: number | undefined,
    quizScore: number,
    currentQuestionAnswers: QuizQuestionAnswer[];
}
