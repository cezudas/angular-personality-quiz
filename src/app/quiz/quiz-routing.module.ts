import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { DeactivateGuard } from './deactivate.guard';

const routes: Routes = [
  { path: '', component: QuizComponent, canDeactivate: [DeactivateGuard] },
  { path: '**', redirectTo: '/quiz', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}
