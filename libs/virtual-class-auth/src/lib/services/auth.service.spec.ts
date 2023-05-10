// import { NavigationBehaviorOptions, Router, UrlTree } from '@angular/router';
// import { ConfigService } from '@apx-ui/apx-config';
// import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
// import { OAuthService } from 'angular-oauth2-oidc';
// import { of } from 'rxjs';
//
// import { AuthService as SuT } from './auth.service';
//
// describe('AuthService', () => {
//
//   class RouterService {
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     navigateByUrl(url: string | UrlTree, extras?: NavigationBehaviorOptions): Promise<boolean> {
//       return {} as any;
//     }
//   }
//
//   class Config {
//
//     settings = {
//       production: false,
//       api_url: 'https://localhost:44366/api',
//       common_api_url: 'https://apxdev.corp.halliburton.com:8081/APXCommonApi/api',
//       authSettings: {
//         authority: 'https://myappstest.halliburton.com/oauth2/ausk4axfvsdNLJ8rU0h7',
//         client_id: '0oaqfgou0hkxXw6G10h7',
//         redirect_uri: 'http://localhost:4200/authcallback',
//         post_logout_redirect_uri: 'http://localhost:4200/postlogout',
//       },
//     };
//
//     getEnvironment(): any {
//       return { ...this.settings };
//     }
//   }
//
//   class AuthService {
//     events = of({
//       type: '',
//     });
//
//     // eslint-disable-next-line @typescript-eslint/no-empty-function
//     configure(): void {
//     }
//     // eslint-disable-next-line @typescript-eslint/no-empty-function
//     loadDiscoveryDocument(): void {
//     }
//     // eslint-disable-next-line @typescript-eslint/no-empty-function
//     setupAutomaticSilentRefresh(): void {
//     }
//     // eslint-disable-next-line @typescript-eslint/no-empty-function
//     loadDiscoveryDocumentAndTryLogin(): void {
//     }
//   }
//
//   let spectator: SpectatorService<SuT>;
//   let sut: SuT;
//
//   const createService = createServiceFactory({
//     service: SuT,
//     providers: [
//       { provide: ConfigService, useClass: Config },
//       { provide: OAuthService, useClass: AuthService },
//       { provide: Router, useClass: RouterService },
//     ],
//   });
//
//   beforeEach(() => {
//
//     spectator = createService();
//
//     sut = spectator.inject(SuT);
//
//   });
//
//   it('should create', () => {
//
//     expect(sut).toBeTruthy();
//
//   });
//
// });
