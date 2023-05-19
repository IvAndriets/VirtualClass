import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { VirtualClassSharedUiModule } from '@virtual-class-frontend/virtual-class-shared-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultOAuthInterceptor, OAuthModule } from 'angular-oauth2-oidc';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ConfigService, VirtualClassConfigModule } from '@virtual-class-frontend/virtual-class-config';
import { VirtualClassAuthModule } from '@virtual-class-frontend/virtual-class-auth';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { extModules } from './build-specifics';
import { ROOT_REDUCERS } from './stores/reducers';
import { effects } from './stores/effects';
import { VirtualClassWebApiV1Module } from '@virtual-class-frontend/virtual-class-web-api-v1';
import { states } from "./stores/states";
import { containers } from "./containers";
import { components } from "./components";
import {
  ApxApiHttpUrlGenerator,
  dataServiceConfigFactory,
  DataServiceFactory,
  ENTITY_COLLECTION_REDUCER_METHODS_FACTORY_PROVIDER,
  ENTITY_DISPATCHER_DEFAULT_OPTIONS, ENTITY_DISPATCHER_FACTORY_PROVIDER, VirtualClassCoreModule
} from "@virtual-class-frontend/virtual-class-core";
import { DefaultDataServiceConfig, DefaultDataServiceFactory, EntityDataModule, HttpUrlGenerator } from "@ngrx/data";
import { CustomRoutePreloadingStrategy, CustomRouteReuseStrategy } from "./strategies";
import { CustomRouterStateSerializer } from "./serializers";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...containers,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
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
    VirtualClassCoreModule.forRoot(),
    VirtualClassWebApiV1Module.forRoot(),

    // Ngrx Data Imports.
    EntityDataModule.forRoot({ }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DefaultOAuthInterceptor,
      multi: true,
    },

    { provide: DefaultDataServiceFactory, useClass: DataServiceFactory },
    { provide: DefaultDataServiceConfig, useFactory: dataServiceConfigFactory, deps: [ConfigService] },
    { provide: HttpUrlGenerator, useClass: ApxApiHttpUrlGenerator },

    ENTITY_COLLECTION_REDUCER_METHODS_FACTORY_PROVIDER,
    ENTITY_DISPATCHER_DEFAULT_OPTIONS,
    ENTITY_DISPATCHER_FACTORY_PROVIDER,

    CustomRoutePreloadingStrategy,
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },

    ...states,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
