import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Link } from "@virtual-class-frontend/virtual-class-web-api-v1";
import { CoursesService, LinksService } from "@virtual-class-frontend/virtual-class-store";

@Component({
  selector: 'virtual-class-frontend-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.scss'],
})
export class LinksListComponent implements OnInit{
  @Input() courseId: string = '';
  links$!: Observable<Link[]>;

  constructor(
    private readonly linksService: LinksService,
  ) {
  }
  ngOnInit(): void {
    this.linksService.loadWithQuery({ course_id: this.courseId })

    this.links$ = this.linksService.entities$;
  }

  onAdd() {
    const param = {
      use_access_code: false,
      access_code: 'rrr',
      course_id: this.courseId
    }

    this.linksService.add(param as any);

  }
}
