import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { LeaveQuizConfirmationComponent } from './components/leave-quiz-confirmation/leave-quiz-confirmation.component';
import { QuizComponent } from './components/quiz/quiz.component';

@Injectable({
  providedIn: 'root',
})
export class DeactivateGuard implements CanDeactivate<unknown> {
  constructor(private modalService: MatDialog) {}
  canDeactivate(
    component: QuizComponent
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      
     if(component.canDeactivate()) {
       return true;
     }

    return new Observable((observer: Observer<boolean>) => {
      let dialogRef = this.modalService.open(LeaveQuizConfirmationComponent, {
        width: '600px',
        height: '250px',
      });

      dialogRef.afterClosed().subscribe({
        next: (result) => {
          observer.next(result);
          observer.complete();
        },
        error: (error) => {
          observer.next(false);
          observer.complete();
        },
      });
    });
  }
}
