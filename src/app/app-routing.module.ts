import { NgModule } from '@angular/core'
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'
import { ExtraOptions } from '@angular/router'
import { NotFoundComponent } from './modules/common-component/not-found/not-found.component'
const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  preloadingStrategy: PreloadAllModules
}
const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/login/login.module').then(module => module.LoginModule)
  },
  {
    path: 'lobby',
    loadChildren: () =>
      import('./modules/lobby/lobby.module').then(module => module.LobbyModule)
  },
  { path: 'not-found', component: NotFoundComponent },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
