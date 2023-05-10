import { Route } from "@angular/router";
import { VirtualClassAccountModule } from "@virtual-class-frontend/virtual-class-account";

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
        // canActivate: [RoleGuard],
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
