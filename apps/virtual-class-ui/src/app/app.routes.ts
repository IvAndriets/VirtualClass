import { Route } from "@angular/router";

export const appRoutes: Route[] = [
  {
    path: '',
    // component: fromContainers.AppLayoutContainerComponent,
    children: [
      // {
      //   path: 'error',
      //   component: fromContainers.AppErrorContainerComponent,
      // },
      // {
      //   path: 'authcallback',
      //   component: SignInCallBackComponent,
      // },
      // {
      //   path: 'postlogout',
      //   component: SignInCallBackComponent,
      // },
      {
        path: 'landing',
        loadChildren: () => import('@virtual-class-frontend/virtual-class-account').then(m => m.VirtualClassAccountModule),
      },
      {
        path: '**',
        redirectTo: 'landing',
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
