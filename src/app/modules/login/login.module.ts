import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

/**Rutas */
import { LoginRoutingModule } from './login-routing.module'
/**Servicios */
import { AuthenticationService } from '../../services/authentication/authentication.service'

import { ActivateAccountComponent } from './components/activate-account/activate-account.component'
import { RequestCodeComponent } from './components/request-code/request-code.component'
import { ResetPasswordComponent } from './components/reset-password/reset-password.component'
import { SignInComponent } from './components/sign-in/sign-in.component'
import { LoginComponent } from './login.component'
import { RegistryComponent } from './components/registry/registry.component'
import { CardModule } from 'primeng/card'
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button'
import { FormsModule } from '@angular/forms'
import { PasswordModule } from 'primeng/password'
import { InputMaskModule } from 'primeng/inputmask'
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { SidebarModule } from 'primeng/sidebar'
import { FocusTrapModule } from 'primeng/focustrap'

import { MatFormFieldModule } from '@angular/material/form-field'
import { ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    LoginComponent,
    ActivateAccountComponent,
    RequestCodeComponent,
    ResetPasswordComponent,
    SignInComponent,
    RegistryComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    PasswordModule,
    InputMaskModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    ProgressSpinnerModule,
    SidebarModule,
    FocusTrapModule
  ],
  providers: [AuthenticationService]
})
export class LoginModule {}
