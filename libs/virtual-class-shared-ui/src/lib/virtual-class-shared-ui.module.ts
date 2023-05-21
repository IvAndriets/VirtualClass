import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { components } from "./components";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

const material = [
  FlexLayoutModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatTooltipModule,
  MatIconModule,
  MatBadgeModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatDividerModule,
  MatDialogModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatSortModule,
  MatMenuModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatSlideToggleModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...material,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...material,
    ...components,
  ]
})
export class VirtualClassSharedUiModule {
  static forRoot(): ModuleWithProviders<VirtualClassSharedUiModule> {
    return {
      ngModule: VirtualClassSharedUiModule,
      providers: [
        {
          provide: MAT_DIALOG_DEFAULT_OPTIONS,
          useValue: {
            width: '600px',
            // TODO use default styles for dialogs for future
            // panelClass: 'apx-ui-dialog-container',
            hasBackdrop: true,
          },
        },
      ],
    };
  }
}
