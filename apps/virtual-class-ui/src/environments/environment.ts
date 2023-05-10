/* eslint-disable multiline-comment-style */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: 'http://localhost:8000/',
  authSettings: {
    authority: 'http://127.0.0.1:18080/',
    client_id: 'virtual-class',
    redirect_uri: 'http://localhost:4200/authcallback',
    post_logout_redirect_uri: 'http://localhost:4200/postlogout',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
