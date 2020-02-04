import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckinComponent } from './modules/checkin/checkin.component';
import { TicketInfoComponent } from './modules/ticket-info/ticket-info.component';
import { SafetyComponent } from './modules/safety/safety.component';
import { BoardingComponent } from './modules/boarding/boarding.component';
import { DirectAccessGuard } from './directaccessguard';



const routes: Routes = [
  { path: '', redirectTo: 'checkin', pathMatch: 'full'},
  { path: 'checkin', component: CheckinComponent },
  { path: 'ticket', component: TicketInfoComponent , canActivate: [DirectAccessGuard]  },
  { path: 'safety', component: SafetyComponent , canActivate: [DirectAccessGuard] },
  { path: 'boarding', component: BoardingComponent, canActivate: [DirectAccessGuard]  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
