import { Route } from "@angular/router";
import { VirtualClassUiSignInCallBackComponent } from "./components";
import * as fromContainers from './containers';
import { SignInCallBackComponent } from "./components/sign-in-call-back/sign-in-call-back.component";

export const appRoutes: Route[] = [
  {
    path: '',
    component: fromContainers.AppLayoutContainerComponent,
    children: [
      {
        path: 'error',
        component: fromContainers.AppErrorContainerComponent,
      },
      {
        path: 'authcallback',
        component: VirtualClassUiSignInCallBackComponent,
      },
      {
        path: 'postlogout',
        component: SignInCallBackComponent,
      },
      {
        path: 'landing',
        loadChildren: () => import('@virtual-class-frontend/virtual-class-account').then(m => m.VirtualClassAccountModule),
      },
      {
        path: 'courses',
        loadChildren: () => import('@virtual-class-frontend/virtual-class-courses').then(m => m.VirtualClassCoursesModule),
      },
      {
        path: '**',
        redirectTo: 'courses',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];
