import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DashboardComponent } from './components/dashboard/dashboard.component'
//Componentes
import { LobbyComponent } from './lobby.component'

const routes: Routes = [
  {
    path: '',
    component: LobbyComponent,
    data: { title: 'Lobby' },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Dashboard' }
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LobbyRoutingModule {}
