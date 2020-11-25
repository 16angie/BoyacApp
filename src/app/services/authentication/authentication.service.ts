import { HttpClient } from '@angular/common/http'
import { Token } from '../../models/token/token'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Global } from 'src/app/models/global/global'

@Injectable()
export class AuthenticationService {
  constructor (private http: HttpClient, private router: Router) {}

  login (credencial): Observable<any> {
    this.removeToken()
    return this.http.post<any>('login/', credencial, { observe: 'response' })
  }
  /**
   * Método que obtiene el token almacenado en localstorage
   */
  getStorageToken (): Token {
    let token: Token
    if (typeof Storage != 'undefined') {
      token = JSON.parse(localStorage.getItem('fc_key'))
    } else {
      token = null
    }
    return token
  }
  /**
   * Obtiene el id de la irg guardada
   */
  getStorageTokenOrg () {
    let id = localStorage.getItem('fc_key')
    if (id == null || id == undefined) {
      this.router.navigate(['/lobby'])
    } else {
      return id
    }
  }
  /**
   * Guarda org en local storage
   */
  setStorageTokenOrg (id) {
    localStorage.setItem('fc_key', id)
  }

  /**
   * Método para cerrar sesión y eliminar el token
   */
  logOut () {
    let token: Token = this.getStorageToken()
    //this.http.get<any>('logout/').subscribe(res => {})
    this.removeToken()
    localStorage.clear()
  }

  /**
   * Metodo que remueve el token del localstorage
   */
  removeToken () {
    if (typeof Storage != 'undefined') {
      localStorage.removeItem('fc_key')
    }
  }
  /**
   * Método patra guardar el token de autentcación en locasotrage
   * @param token Token de autenticación
   */
  storageToken (token: Token) {
    this.removeToken()
    let storageWell: boolean = true
    if (typeof Storage !== 'undefined') {
      if (token != null) {
        localStorage.setItem('fc_key', JSON.stringify(token))
      } else {
        storageWell = false
      }
    } else {
      alert('Update your navigator')
      storageWell = false
    }
    return storageWell
  }
}
