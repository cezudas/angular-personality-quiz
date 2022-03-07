import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuizState } from '../types/quiz-state';
import mockQuestions from './mockQuestions';
import { PersonalityService } from './personality.service';

@Injectable()
export class QuizService {
  constructor(private personalityService: PersonalityService) {}
  getInitialState = (): QuizState => {
    const questions = this.shuffle(mockQuestions).slice(0, 5);
    return {
      questions: questions,
      currentQuestionIdx: 0,
      currentQuestionAnswers: this.shuffle(questions[0].answers),
      showResults: false,
      quizScore: 0,
    };
  };

  getState(): QuizState {
    return this.state$.getValue();
  }
  setState(partialState: Partial<QuizState>): void {
    this.state$.next({ ...this.getState(), ...partialState });
  }
  state$ = new BehaviorSubject<QuizState>({ ...this.getInitialState() });

  nextQuestion(): void {
    const {
      currentQuestionIdx,
      questions,
      quizScore,
      currentQuestionAnswerIdx,
      currentQuestionAnswers,
    } = this.getState();
    const showResults = currentQuestionIdx === questions.length - 1;

    const selectedAnswerScore =
      currentQuestionAnswers[currentQuestionAnswerIdx as number].score;
    const newCurrentQuestionIdx = showResults
      ? currentQuestionIdx
      : currentQuestionIdx + 1;

    const newQuizScore = showResults
      ? Math.floor(quizScore / questions.length)
      : quizScore + selectedAnswerScore;

    const personalityTraitResult = showResults
      ? this.personalityService.determinePersonalityTrait(newQuizScore)
      : undefined;

    this.setState({
      currentQuestionIdx: newCurrentQuestionIdx,
      showResults,
      quizScore: newQuizScore,
      personalityTraitResult,
      currentQuestionAnswerIdx: undefined,
      currentQuestionAnswers: this.shuffle(
        questions[newCurrentQuestionIdx].answers
      ),
    });
  }

  restart(): void {
    this.setState({ ...this.getInitialState() });
  }

  shuffle<T>(originalList: T[]): T[] {
    return originalList
      .map((item) => ({
        sort: Math.random(),
        value: item,
      }))
      .sort((a, b) => a.sort - b.sort)
      .map((el) => el.value);
  }

  selectAnswer(answerIndex: number) {
    this.setState({ currentQuestionAnswerIdx: answerIndex });
  }
}
