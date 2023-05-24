import { Routes } from '@angular/router';

import { CoursesListComponent } from "./components/courses/courses-list/courses-list.component";
import { CreateCoursesComponent } from "./components/courses/create-courses/create-courses.component";
import { ViewCourseComponent } from "./components/courses/view-course/view-course.component";
import { CreateLectureComponent } from "./components/lectures/create-lecture/create-lecture.component";
import { ViewLectureComponent } from "./components/lectures/view-lecture/view-lecture.component";
import { HomeworksListComponent } from "./components/homeworks/homeworks-list/homeworks-list.component";
import { HomeworksViewComponent } from "./components/homeworks/homeworks-view/homeworks-view.component";

export const routes: Routes = [
  {
    path: '',
    component: CoursesListComponent,
  },
  {
    path: 'new',
    component: CreateCoursesComponent,
  },
  {
    path: ':courseId',
    children: [
      {
        path: '',
        component: ViewCourseComponent,
      },
      {
        path: 'lectures',
        children: [
          {
            path: 'new',
            component: CreateLectureComponent,
          },
          {
            path: ':lectureId',
            children: [
              {
                path: '',
                component: ViewLectureComponent,
              },
              {
                path: 'homeworks',
                children: [
                  {
                    path: '',
                    component: HomeworksListComponent,
                  },
                  {
                    path: ':homeworksId',
                    component: HomeworksViewComponent,
                  },
                ]
              },
            ]
          },
        ]
      },
    ]
  },
];
