import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.css']
})
export class TicketInfoComponent implements OnInit {

  ticketDetails: Ticket;

  message: string = "ticket";

  
  constructor(private data: DataService ) {
    
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(data => { this.ticketDetails = data });
  this.data.updateCurrentPage(this.message);
  
  }

}
