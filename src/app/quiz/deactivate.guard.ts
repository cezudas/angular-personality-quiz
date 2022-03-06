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

@Injectable({
  providedIn: 'root',
})
export class DeactivateGuard implements CanDeactivate<unknown> {
  constructor(private modalService: MatDialog) {}
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
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
