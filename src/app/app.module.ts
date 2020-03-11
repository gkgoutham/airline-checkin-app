import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CheckinComponent } from './modules/checkin/checkin.component';
import { TicketInfoComponent } from './modules/ticket-info/ticket-info.component';
import { SafetyComponent } from './modules/safety/safety.component';
import { BoardingComponent } from './modules/boarding/boarding.component';
import { DirectAccessGuard } from './directaccessguard';
import { TableModule } from 'primeng/table';
import { HttpErrorInterceptor } from './HttpErrorInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    CheckinComponent,
    TicketInfoComponent,
    SafetyComponent,
    BoardingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TableModule
  ],
  providers: [DirectAccessGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
