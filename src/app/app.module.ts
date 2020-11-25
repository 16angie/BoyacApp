import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthenticationService } from './services/authentication/authentication.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LobbyComponent } from './modules/lobby/lobby.component'
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS
} from '@angular/common/http'
import { HttpConfigInterceptor } from './services/interceptor/interceptor.service'

//components
import { SidebarModule } from 'primeng/sidebar'
import { ScrollPanelModule } from 'primeng/scrollpanel'
import { ButtonModule } from 'primeng/button'
import { MenuModule } from 'primeng/menu'
import { MessagesModule } from 'primeng/messages'
import { MessageModule } from 'primeng/message'
import { LobbyRoutingModule } from './modules/lobby/lobby-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LobbyRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SidebarModule,
    ScrollPanelModule,
    ButtonModule,
    MenuModule,
    MessagesModule,
    MessageModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    },
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
