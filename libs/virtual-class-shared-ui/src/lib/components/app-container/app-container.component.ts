import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'virtual-class-frontend-shared-ui-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(300)]),
      transition(':leave', animate(300, style({ opacity: 0 }))),
    ]),
  ],
})
export class AppContainerComponent implements OnInit {

  @Input() title: string | null = '';
  @Input() ready: boolean | null = false;
  @Input() error!: HttpErrorResponse | null;
  @HostBinding('class') cls = 'apx-ui-app-container';

  pending$!: Observable<boolean>;

  constructor(
    private readonly loader: LoadingBarService,
  ) {
  }

  ngOnInit(): void {

    this.pending$ = this.loader.value$.pipe(
      map(v => v !== 0),
      distinctUntilChanged(),
      debounceTime(800),
    );

  }

}
