import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ActivateAccountComponent } from './components/activate-account/activate-account.component'
import { RequestCodeComponent } from './components/request-code/request-code.component'
import { ResetPasswordComponent } from './components/reset-password/reset-password.component'
import { SignInComponent } from './components/sign-in/sign-in.component'
import { LoginComponent } from './login.component'
import { RegistryComponent } from './components/registry/registry.component'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: '', component:  SignInComponent},
      { path: 'activate-account', component: ActivateAccountComponent },
      { path: 'requestcode', component: RequestCodeComponent },
      { path: 'resetpassword', component: ResetPasswordComponent },
      { path: 'registry', component: RegistryComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
