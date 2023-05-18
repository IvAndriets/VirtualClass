import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel, UserStateService } from "@virtual-class-frontend/virtual-class-web-api-v1";
// import { RouterStateService } from "@virtual-class-frontend/virtual-class-core";

@Component({
  selector: 'virtual-class-frontend-app-layout-container',
  templateUrl: './app-layout-container.component.html',
  styleUrls: ['./app-layout-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLayoutContainerComponent implements OnInit {

  user$!: Observable<UserModel | null>;
  // account$!: Observable<AccountModel | null>;

  constructor(
    private readonly userState: UserStateService,
    // private readonly accountState: AccountStateService,
    // private readonly routerState: RouterStateService,
  ) {
  }

  ngOnInit(): void {
    this.user$ = this.userState.getUser$();

    // this.account$ = combineLatest([
    //   this.routerState.getParam$('accountId'),
    //   this.accountState.getAccounts$(),
    // ]).pipe(
    //   map(([accountId, accounts]) => accounts.find(a => a.getId() === accountId) ?? null),
    // );
  }

}
