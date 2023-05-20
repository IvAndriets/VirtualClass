import { Component } from '@angular/core';
import { CoursesService } from "@virtual-class-frontend/virtual-class-store";
import { map, Observable } from "rxjs";
import { Pagination, RouterStateService, Status } from "@virtual-class-frontend/virtual-class-core";

@Component({
  selector: 'virtual-class-frontend-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  courses$;
  status$: Observable<Status>
  pagination$!: Observable<Pagination>;
  paginationLimit = 8;

  constructor(
    private readonly coursesService: CoursesService,
    private readonly routerState: RouterStateService,
  ){
    this.coursesService.getWithQuery({});
    this.courses$ = this.coursesService.entities$;
    this.status$ = this.coursesService.status$;
    this.pagination$ = this.getPagination();

  }

  private getPagination(): Observable<Pagination> {
    return this.routerState.getQueryParams$().pipe(
      map(queryParams => {
        const offset = +(queryParams['offset'] ?? 0);
        const limit = +(queryParams['limit'] ?? this.paginationLimit);

        return {
          index: offset / limit,
          offset,
          limit,
        };
      }));
  }
}
