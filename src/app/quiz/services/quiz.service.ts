import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SubSink } from 'subsink';
import { QuizQuestion } from '../types/quiz-question';
import { QuizState } from '../types/quiz-state';

@Injectable()
export class QuizService implements OnDestroy {
  private subs = new SubSink();

  state$ = new BehaviorSubject<QuizState>({
    questions: [],
    currentQuestionIdx: 0,
    currentQuestionAnswers: [],
    showResults: false,
    quizScore: 0,
  });

  constructor(
    http: HttpClient
  ) {
    this.subs.add(
      http
        .get<QuizQuestion[]>('/assets/mock/questions.json')
        .subscribe((questions) => {
          this.setState({ ...this.getInitialState(questions) });
        })
    );
  }
  getInitialState = (originalQuestions: QuizQuestion[]): QuizState => {
    const questions = this.shuffle(originalQuestions).slice(0, 5);
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
    const newCurrentQuestionIdx = currentQuestionIdx + 1;

    // const newQuizScore = showResults
    //   ? Math.floor(quizScore / questions.length)
    //   : quizScore + selectedAnswerScore;

    this.setState({
      currentQuestionIdx: newCurrentQuestionIdx,
      showResults,
      quizScore: quizScore + selectedAnswerScore,
      currentQuestionAnswerIdx: undefined,
      currentQuestionAnswers: showResults ? []: this.shuffle(
        questions[newCurrentQuestionIdx].answers
      ),
    });
  }

  restart(): void {
    const {questions} = this.getState();
    this.setState({ ...this.getInitialState(questions) });
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

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
