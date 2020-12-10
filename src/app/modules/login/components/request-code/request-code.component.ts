import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-request-code',
  templateUrl: './request-code.component.html',
  styleUrls: ['./request-code.component.scss']
})
export class RequestCodeComponent implements OnInit {
  /**
   * Campo para activar si existe error en la petición
   */
  public existUser: boolean
  /**
   * Mensaje de error
   */
  public errorMessage: string
  /**
   * Email para enviar la contraseña
   */
  public emailRecovery: FormControl
  public formGroup: FormGroup
  constructor (private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit () {
    this.existUser = true
    this.formGroup = this.formBuilder.group({
      emailRecovery: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    })
  }
  visibleSidebar1
  sendCode () {
    if (this.formGroup.valid) {
      this.visibleSidebar1 = true

      Swal.fire({
        icon: 'success',
        confirmButtonColor: '#3F51B5',
        text: 'login.send-code.email-sent'
      }).then(result => {
        this.router.navigate(['/auth/resetpassword'])
      })
    }
  }

  /**
   * Devuelve el mensaje de email de recuperación incorrecto
   */
  getErrorMessageEmailRecovery () {
    return this.emailRecovery.hasError('required')
      ? 'validations.required-value'
      : this.emailRecovery.hasError('email')
      ? 'validations.error-email'
      : ''
  }
}
