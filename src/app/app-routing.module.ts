import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {authGuard} from "./core/guards/auth.guard";

enum RoutePathsInner {
  AUTHORIZATION = 'authorization',
  REGISTRATION = 'registration',
  POSTS = 'posts',
  POST = 'post',
}

function getRoutePaths(): Readonly<Record<keyof typeof RoutePathsInner, string>> {
  const b: any = {};
  Object.entries(RoutePathsInner).forEach(([k, v]) => {
    b[k] = `/${v}`;
  })
  return b;
}
export const RoutePaths = getRoutePaths();

const routes: Routes = [
  {
    path: RoutePathsInner.REGISTRATION,
    loadChildren: () => import('./modules/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: RoutePathsInner.AUTHORIZATION,
    loadChildren: () => import('./modules/authorization/authorization.module').then(m => m.AuthorizationModule)
  },
  {
    path: RoutePathsInner.POSTS,
    canActivate: [authGuard],
    loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: `${RoutePathsInner.POST}/:id`,
    canActivate: [authGuard],
    loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule)
  },
  {
    path: RoutePathsInner.POST,
    redirectTo: RoutePathsInner.POSTS,
  },
  {
    path: '**',
    redirectTo: RoutePathsInner.AUTHORIZATION,
  },
  /*{
    path: '',
    component: AppComponent,
    children: [

    ]
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
