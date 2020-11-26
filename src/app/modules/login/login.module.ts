import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

/**Rutas */
import { LoginRoutingModule } from './login-routing.module'
/**Servicios */
import { AuthenticationService } from '../../services/authentication/authentication.service'

import { LoginComponent } from './login.component'

import { CardModule } from 'primeng/card'
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button'
import { FormsModule } from '@angular/forms'
import { PasswordModule } from 'primeng/password'
import { InputMaskModule } from 'primeng/inputmask'
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { SidebarModule } from 'primeng/sidebar'

import { ReactiveFormsModule } from '@angular/forms'
import { SignInComponent } from './components/sign-in/sign-in.component'
@NgModule({
  declarations: [LoginComponent, SignInComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    PasswordModule,
    InputMaskModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    SidebarModule
  ],
  providers: [AuthenticationService]
})
export class LoginModule {}
