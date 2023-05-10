// import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
//
// import { ENVIRONMENT } from '../tokens';
// import { ConfigService as SuT } from './config.service';
//
// describe('ConfigService', () => {
//
//   const environment = {
//     production: false,
//     api_url: 'https://localhost:44366/api',
//     common_api_url: 'https://apxdev.corp.halliburton.com:8081/APXCommonApi/api',
//     authSettings: {
//       authority: 'https://myappstest.halliburton.com/oauth2/ausk4axfvsdNLJ8rU0h7',
//       client_id: '0oaqfgou0hkxXw6G10h7',
//       redirect_uri: 'http://localhost:4200/authcallback',
//       post_logout_redirect_uri: 'http://localhost:4200/postlogout',
//     },
//   };
//
//   let spectator: SpectatorService<SuT>;
//   let sut: SuT;
//
//   const createService = createServiceFactory({
//     service: SuT,
//     providers: [
//       { provide: ENVIRONMENT, useValue: environment },
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
