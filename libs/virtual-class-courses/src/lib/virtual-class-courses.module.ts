import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { components } from './components';
import { RouterModule } from '@angular/router';
import { routes } from './virtual-class-courses.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  entityMetadataMap,
  pluralNames,
  VirtualClassStoreModule,
} from '@virtual-class-frontend/virtual-class-store';
import {
  DefaultPluralizer,
  EntityDefinitionService,
  Pluralizer,
} from '@ngrx/data';
import { VirtualClassSharedUiModule } from '@virtual-class-frontend/virtual-class-shared-ui';
import { LectureCardComponent } from './components/lectures/lecture-card/lecture-card.component';
import { EditCourseComponent } from './components/courses/edit-course/edit-course.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    VirtualClassStoreModule,
    VirtualClassSharedUiModule,
  ],
  declarations: [
    ...components,
    LectureCardComponent,
    EditCourseComponent,
    EditCourseComponent,
  ],
})
export class VirtualClassCoursesModule {
  constructor(
    pluralizer: Pluralizer,
    entityDefinitionService: EntityDefinitionService
  ) {
    entityDefinitionService.registerMetadataMap(entityMetadataMap);
    (pluralizer as DefaultPluralizer).registerPluralNames(pluralNames);
  }
}
