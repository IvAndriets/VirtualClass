import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, filter, Observable, switchMap } from "rxjs";
import {Homework, Lecture} from "@virtual-class-frontend/virtual-class-web-api-v1";
import {HomeworksService, LecturesService} from "@virtual-class-frontend/virtual-class-store";
import { RouterStateService } from "@virtual-class-frontend/virtual-class-core";

@Component({
  selector: 'virtual-class-frontend-homeworks-list',
  templateUrl: './homeworks-list.component.html',
  styleUrls: ['./homeworks-list.component.scss'],
})
export class HomeworksListComponent implements OnInit {
  homeworks$!: Observable<Homework[]>
  maxGrade: string = '';

  constructor(
    private readonly homeworksService: HomeworksService,
    private readonly routerState: RouterStateService,
    private readonly lecturesService: LecturesService,
  ) {
  }

  ngOnInit(): void {
    this.homeworksService.clearCache();
    this.routerState.getParam$('lectureId').pipe(
      distinctUntilChanged(),
      filter(lectureId => !!lectureId),
      switchMap(lectureId => this.homeworksService.loadWithQuery({ lecture_id: lectureId })),
    ).subscribe();


    this.homeworks$ = this.homeworksService.entities$;
  }
}

