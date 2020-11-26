import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SignInComponent } from './components/sign-in/sign-in.component'
import { LoginComponent } from './login.component'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [{ path: '', component: SignInComponent }]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
