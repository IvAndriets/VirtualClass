import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { VirtualClassSharedUiModule } from '@virtual-class-frontend/virtual-class-shared-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultOAuthInterceptor, OAuthModule } from 'angular-oauth2-oidc';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { VirtualClassConfigModule } from '@virtual-class-frontend/virtual-class-config';
import { VirtualClassAuthModule } from '@virtual-class-frontend/virtual-class-auth';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { extModules } from './build-specifics';
import { ROOT_REDUCERS } from './stores/reducers';
import { effects } from './stores/effects';
import { VirtualClassWebApiV1Module } from '@virtual-class-frontend/virtual-class-web-api-v1';
import { VirtualClassUiSignInCallBackComponent } from './components/virtual-class-ui-sign-in-call-back/virtual-class-ui-sign-in-call-back.component';
import { states } from "./stores/states";

@NgModule({
  declarations: [AppComponent, VirtualClassUiSignInCallBackComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: [environment.api_url],
        sendAccessToken: true,
      },
    }),

    StoreModule.forRoot(ROOT_REDUCERS, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictStateSerializability: false,
        strictActionSerializability: false,
      },
    }),
    extModules,

    // Ngrx Effects Imports.
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),

    VirtualClassSharedUiModule.forRoot(),
    VirtualClassConfigModule.forRoot(environment),
    VirtualClassAuthModule.forRoot(),
    VirtualClassWebApiV1Module.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DefaultOAuthInterceptor,
      multi: true,
    },

    ...states as any,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
