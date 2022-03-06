import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuizQuestion } from '../types/quiz-question';
import { QuizQuestionAnswer } from '../types/quiz-question-answer';
import { QuizState } from '../types/quiz-state';
import mockData from './mockData';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  initialState: QuizState = {
    questions: mockData,
    currentQuestionIdx: 0,
    currentQuestionAnswers: this.shuffleAnswers(mockData[0]),
    showResults: false,
  };

  getState(): QuizState {
    return this.state$.getValue();
  }
  setState(partialState: Partial<QuizState>): void {
    this.state$.next({ ...this.getState(), ...partialState });
  }
  state$ = new BehaviorSubject<QuizState>({ ...this.initialState });

  nextQuestion(): void {
    const { currentQuestionIdx, questions } = this.getState();
    const showResults = currentQuestionIdx === questions.length - 1;
    this.setState({
      currentQuestionIdx: showResults
        ? currentQuestionIdx
        : currentQuestionIdx + 1,
      showResults,
    });
  }

  restart(): void {
    this.setState({ ...this.initialState });
  }

  shuffleAnswers(question: QuizQuestion): QuizQuestionAnswer[] {
    return question.answers
      .map((unshuffledAnswer) => ({
        sort: Math.random(),
        value: unshuffledAnswer,
      }))
      .sort((a, b) => a.sort - b.sort)
      .map((el) => el.value);
  }
}
