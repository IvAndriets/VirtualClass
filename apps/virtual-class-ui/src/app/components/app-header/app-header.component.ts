import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { combineLatest, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { UserModel, UserStateService } from "@virtual-class-frontend/virtual-class-web-api-v1";
import { AuthService } from "@virtual-class-frontend/virtual-class-auth";
// import { RouterStateService } from "@virtual-class-frontend/virtual-class-core";

@Component({
  selector: 'virtual-class-frontend-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeaderComponent implements OnInit {

  @Input() user!: UserModel | null;

  // totalNotifications$: Observable<number>;
  // isLandingPage$: Observable<boolean>;
  // showFieldTasksButton$: Observable<boolean>;
  // showNotificationButton$: Observable<boolean>;

  constructor(
    private readonly auth: AuthService,
    // private readonly notificationState: NotificationStateService,
    private readonly dialog: MatDialog,
    // private readonly routerState: RouterStateService,
    private readonly userStateService: UserStateService,
  ) {
  }

  ngOnInit(): void {
    // this.showFieldTasksButton$ = this.userStateService.hasRight$(Permissions.FieldTasksViewNavButton);
    // this.showNotificationButton$ = this.userStateService.hasRight$(Permissions.NotificationsView);
    // this.totalNotifications$ = this.notificationState.getNotificationCount$();
    // this.isLandingPage$ = this.routerState.getUrl$().pipe(
    //   map(url => !!url?.includes('landing')),
    // );

    // combineLatest([
    //   this.showNotificationButton$,
    //   this.routerState.getParam$('accountId'),
    // ]).pipe(
    //   filter(([right]) => !!right),
    //   tap(([, accountId]) => this.notificationState.loadNotificationCount(accountId ?? '')),
    //   )
    //  .subscribe();
  }

  logout(): void {
    this.auth.logout();
  }

  // onClickNotifications(): void {
  //   this.dialog.open(ApxNotificationsListContainerComponent, {
  //     width: '500px',
  //     maxWidth: '80vw',
  //     height: '100%',
  //     position: {
  //       right: '0',
  //       top: '0',
  //     },
  //   });
  // }

  // getCount(countNotifications: number): string {
  //   const count = countNotifications.toString();
  //
  //   return countNotifications < 1000 ? count : `..${count.slice(count.length - 2, count.length)}`;
  // }
  //
  // settingsMenuWidth(): number {
  //   return this.settingsBtn?._elementRef.nativeElement.clientWidth || 0;
  // }
}
