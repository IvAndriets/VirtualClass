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
import { HomeworksListComponent } from './components/homeworks/homeworks-list/homeworks-list.component';
import { HomeworksViewComponent } from './components/homeworks/homeworks-view/homeworks-view.component';
import { HomeworksCardComponent } from './components/homeworks/homeworks-card/homeworks-card.component';
import { StudentCardComponent } from './components/courses/student-card/student-card.component';
import { LinksListComponent } from './components/links/links-list/links-list.component';

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
    HomeworksListComponent,
    HomeworksViewComponent,
    HomeworksCardComponent,
    StudentCardComponent,
    LinksListComponent,
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
