import { Component, OnInit } from '@angular/core'
import Swal from 'sweetalert2'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent implements OnInit {
  /**
   * Campo para activar si existe error en la petición
   */
  public existCode: boolean
  /**
   * Mensaje de error
   */
  public errorMessage: string
  /**
   *  Validador del email
   */
  public formGroup: FormGroup
  code: FormControl
  constructor (private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit () {
    this.existCode = true
    this.formGroup = this.formBuilder.group({
      code: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)
      ])
    })
  }
  visibleSidebar1
  activateAccount () {
    this.visibleSidebar1 = false
    if (this.formGroup.valid) {
      this.visibleSidebar1 = true

      Swal.fire({
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#3F51B5',
        text: 'La cuenta fue activada correctamente!'
      }).then(result => {
        if (result.value) {
          this.router.navigate(['/auth/'])
        }
      })
    }
  }

  getErrorMessageCode () {
    return (
      this.code.hasError('minlength'),
      this.code.hasError('maxlength'),
      this.code.hasError('required')
    )
  }
}
