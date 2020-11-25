import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api'
@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
  providers: [MessageService],
  styles: [
    `
      :host ::ng-deep button {
        margin-right: 0.25em;
      }
    `
  ]
})
export class LobbyComponent implements OnInit {
  items: MenuItem[]
  visibleSidebar1: boolean = false
  constructor (
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private router: Router
  ) {}

  ngOnInit (): void {
    this.primengConfig.ripple = true
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Mi perfil',
            icon: 'pi pi-user',
            command: () => {
              this.update()
            },
            routerLink: ['perfil']
          },

          {
            separator: true
          },

          {
            label: 'Cerrar sesión',
            icon: 'pi pi-sign-out',
            command: () => {
              this.logout()
            }
          }
        ]
      }
    ]
  }
  update () {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Data Updated'
    })
  }
  logout () {
    //  this.authenticationService.logOut()
    this.router.navigate([''])
  }
}
