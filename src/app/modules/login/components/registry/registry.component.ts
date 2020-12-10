import { Token } from '@angular/compiler/src/ml_parser/lexer'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { User } from 'src/app/models/user/user'
import * as sha1 from 'js-sha1'
@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {
  formGroup: FormGroup
  constructor (
    private router: Router,
   // private userService: UserService,
   // private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {}
  val
  ngOnInit (): void {
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required])
    })
  }
  user: User
  visibleSidebar1
  registro () {
    this.visibleSidebar1 = false
    if (this.formGroup.valid) {
      this.user = new User(
        this.formGroup.value.email,
        this.formGroup.value.name,
        this.formGroup.value.lastname
      )
      this.user.create = new Date()
      this.user.password = sha1(this.formGroup.value.password)
      //servicio
      this.visibleSidebar1 = false
      this.router.navigate(['/auth/activate-account'])
    }
  }
}
