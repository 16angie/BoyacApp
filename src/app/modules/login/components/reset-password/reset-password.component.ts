import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthenticationService } from 'src/app/services/authentication/authentication.service'
import { Router } from '@angular/router'
import Swal from 'sweetalert2'
import * as sha1 from 'js-sha1'

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public formGroup: FormGroup
  /**
   * Campo para activar si existe error en la petición
   */
  public existCode: boolean
  /**
   * Mensaje de error
   */
  public errorMessage: string
  /**
   * Codigo de restauración
   */
  public code: FormControl
  /**
   * Validador de la contraseña
   */
  public password: FormControl
  /**
   * Confirmación de la contraseña
   */
  public confirmPassword: FormControl

  public hide
  visibleSidebar1
  constructor (private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit () {
    this.existCode = true
    this.formGroup = this.formBuilder.group({
      code: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)
      ]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    })
  }
  verificar () {}
  save () {
    this.visibleSidebar1 = false
    if (this.formGroup.valid) {
      if (
        this.formGroup.value.password == this.formGroup.value.confirmPassword
      ) {
        this.visibleSidebar1 = true

        Swal.fire({
          icon: 'success',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#3F51B5',
          text: 'login.reset-password.password-changed-sucessfully'
        }).then(result => {
          if (result.value) {
            this.router.navigate(['/auth'])
          }
        })
      } else {
        this.errorSwal('Campos contraseña: no coinciden')
      }
    } else {
      this.errorSwal('Campos requeridos')
    }
  }
  errorSwal (text: string) {
    Swal.fire({
      icon: 'error',
      title: 'Validacion',
      confirmButtonText: 'Verificar',
      confirmButtonColor: '#3F51B5',
      text: text + '!'
    })
  }
}
