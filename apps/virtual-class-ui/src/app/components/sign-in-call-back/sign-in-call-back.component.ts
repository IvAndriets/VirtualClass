import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs/operators';
import { AuthService } from "@virtual-class-frontend/virtual-class-auth";

@Component({
  selector: 'apx-ui-apx-sign-in-call-back',
  templateUrl: './sign-in-call-back.component.html',
  styleUrls: ['./sign-in-call-back.component.scss'],
})
export class SignInCallBackComponent implements OnInit {

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
  }

  ngOnInit(): void {
    this.auth.getUserClaims$().pipe(
      take(1),
      tap(user => {

        setTimeout(() => {
          const url = this.document.location.href;
          const hash = this.document.location.hash;

          if (user && (url.includes('authcallback') || url.includes('postlogout')) && !hash ) {
            this.router.navigateByUrl('/');
          }
        }, 3000);
      }),
    ).subscribe();
  }

}
