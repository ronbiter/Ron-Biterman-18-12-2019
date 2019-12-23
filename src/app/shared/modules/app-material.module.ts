import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatSnackBarModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
})
export class AppMaterialModule { }
