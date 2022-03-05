import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';


import { MatIconModule } from '@angular/material/icon';
// import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatCardModule } from '@angular/material/card';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatSnackBarModule } from '@angular/material/snack-bar';

const components = [
  ShellComponent
]

const modules = [
  CommonModule,
  RouterModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatButtonModule

];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules,
  ],
  exports: [
    ...components,
    ...modules
  ],
})
export class SharedModule {}