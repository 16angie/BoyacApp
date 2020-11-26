import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

//forms
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
//Complemets¿os
import { AccordionModule } from 'primeng/accordion'
import { ToolbarModule } from 'primeng/toolbar'
import { SidebarModule } from 'primeng/sidebar'
import { TooltipModule } from 'primeng/tooltip'
import { ButtonModule } from 'primeng/button'
import { MenuModule } from 'primeng/menu'
import { ScrollPanelModule } from 'primeng/scrollpanel'
import { TableModule } from 'primeng/table'
import { PaginatorModule } from 'primeng/paginator'
import { DialogModule } from 'primeng/dialog'
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { SplitButtonModule } from 'primeng/splitbutton'
import { SlideMenuModule } from 'primeng/slidemenu'
import { MenubarModule } from 'primeng/menubar'
import { MatMenuModule } from '@angular/material/menu'
import { RippleModule } from 'primeng/ripple'
import { DropdownModule } from 'primeng/dropdown'
import { AutoCompleteModule } from 'primeng/autocomplete'
import { CardModule } from 'primeng/card'
import { InputNumberModule } from 'primeng/inputnumber'
import { LobbyRoutingModule } from './lobby-routing.module'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { MessagesModule } from 'primeng/messages'
import { MessageModule } from 'primeng/message'

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LobbyRoutingModule,
    AccordionModule,
    ToolbarModule,
    SidebarModule,
    TooltipModule,
    ButtonModule,
    MenuModule,
    ScrollPanelModule,
    TableModule,
    PaginatorModule,
    DialogModule,
    ProgressSpinnerModule,
    SplitButtonModule,
    SlideMenuModule,
    MenubarModule,
    MatMenuModule,
    RippleModule,
    DropdownModule,
    CardModule,
    InputNumberModule,
    AutoCompleteModule,
    MessagesModule,
    MessageModule
  ],
  providers: []
})
export class LobbyModule {}
