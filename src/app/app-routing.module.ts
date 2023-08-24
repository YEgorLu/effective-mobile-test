import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authGuard} from "./core/guards/auth.guard";
import {RoutePaths} from "./shared/helpers/route-paths";

const routes: Routes = [
  {
    path: '**',
    redirectTo: RoutePaths.AUTHORIZATION,
  },
  {
    path: RoutePaths.REGISTRATION,
    loadChildren: () => import('./modules/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: RoutePaths.AUTHORIZATION,
    loadChildren: () => import('./modules/authorization/authorization.module').then(m => m.AuthorizationModule)
  },
  {
    path: RoutePaths.POSTS,
    canActivate: [authGuard],
    loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: `${RoutePaths.POST}/:id`,
    canActivate: [authGuard],
    loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule)
  },
  {
    path: RoutePaths.POST,
    redirectTo: RoutePaths.POSTS,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
