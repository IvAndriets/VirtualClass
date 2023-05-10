import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { VirtualClassSharedUiModule } from '@virtual-class-frontend/virtual-class-shared-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultOAuthInterceptor, OAuthModule } from "angular-oauth2-oidc";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { environment } from "../environments/environment";
import { VirtualClassConfigModule } from "@virtual-class-frontend/virtual-class-config";
import { VirtualClassAuthModule } from "@virtual-class-frontend/virtual-class-auth";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: [
          environment.api_url,
        ],
        sendAccessToken: true,
      },
    }),

    VirtualClassSharedUiModule.forRoot(),

    VirtualClassConfigModule.forRoot(environment),
    VirtualClassAuthModule.forRoot(),

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DefaultOAuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
