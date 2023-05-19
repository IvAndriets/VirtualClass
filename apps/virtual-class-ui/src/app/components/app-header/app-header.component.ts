import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { combineLatest, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { UserModel, UserStateService } from "@virtual-class-frontend/virtual-class-web-api-v1";
import { AuthService } from "@virtual-class-frontend/virtual-class-auth";

@Component({
  selector: 'virtual-class-frontend-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeaderComponent {
  @Input() user!: UserModel | null;

  constructor(
    private readonly auth: AuthService,
  ) {
  }

  logout(): void {
    this.auth.logout();
  }
}
