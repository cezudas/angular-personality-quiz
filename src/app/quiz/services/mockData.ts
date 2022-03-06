import { QuizQuestion } from "../types/quiz-question";

const data: QuizQuestion[] = [
  {
    questionText: 'What does CSS stand for?',
    answers: [
      {
        answerText: 'Computer Style Sheets',
        score: 1,
      },
      { answerText: 'Creative Style Sheets', score: 2 },
      { answerText: 'Colorful Style Sheets', score: 3 },
    ],
  },
  {
    questionText: 'Where in an HTML document is the correct place to refer to an extern style sheet?',
    answers: [
      {
        answerText: 'In the body section',
        score: 1,
      },
      { answerText: 'At the end of the document', score: 2 },
      { answerText: 'You cannot refer to an external style sheet', score: 3 },
    ],
  },
];
export default data;