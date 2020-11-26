import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthenticationService } from 'src/app/services/authentication/authentication.service'
import { Token } from 'src/app/models/token/token'
import * as sha1 from 'js-sha1'
import { User } from 'src/app/models/user/user'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  formGroup: FormGroup
  /**
   * Campo de ocultar contraseña
   */
  public hide: boolean
  /**
   * Preload de sign in
   */
  public preloadSignIn: boolean
  /**
   * Campo para activar si existe error en la petición
   */
  public existUser: boolean
  /**
   * Mensaje de error
   */
  public errorMessage: string
  /**
   *  Validador del email
   */
  public email: ''

  /**
   * Validador de la contraseña
   */
  public password: ''

  constructor (
    private router: Router,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {
    this.hide = true
    this.preloadSignIn = false
  }

  ngOnInit () {
    this.existUser = true
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }
  /**
   * Método de inicio de sesión
   */
  visibleSidebar1
  signIn () {
    this.router.navigate(['/lobby/'])
  }

  /**
   * Devuelve el mensaje de email incorrecto
   */
  getErrorMessageEmail () {
    return ''
  }

  /**
   * Devuelve el mensaje de password incorrecto
   */
  getErrorMessagePassword () {
    return this.password
  }
}
