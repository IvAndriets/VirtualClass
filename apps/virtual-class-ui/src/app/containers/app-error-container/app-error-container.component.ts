import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  selector: 'virtual-class-frontend-main-error-container',
  templateUrl: './app-error-container.component.html',
  styleUrls: ['./app-error-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppErrorContainerComponent implements OnInit {
  type$!: Observable<string | null>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.type$ = this.route.queryParams.pipe(
    //   map(params => (params && params.type ? `${params.type}` : null)),
    // );
  }
}
