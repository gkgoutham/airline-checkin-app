import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

export interface Car {
  vin?;
  year?;
  brand?;
  color?;
  price?;
  saleDate?;
}

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.css']
})
export class TicketInfoComponent implements OnInit {

  ticketDetails: Ticket;

  message: string = "ticket";

  selectedPassengers: Passenger[];
  error: any;

  constructor(private data: DataService,
    public apiService: ApiService,
    public activateRoute: ActivatedRoute,
    public router: Router) {

  }

  ngOnInit() {
    this.data.currentMessage.subscribe(data => { this.ticketDetails = data });
    this.data.updateCurrentPage(this.message);
  }

  doCheckIn() {
    if (this.selectedPassengers) {
      this.ticketDetails.passengers = this.selectedPassengers;
      this.apiService.checkInPassengerDetails(this.ticketDetails).subscribe(
        (data: Ticket) => {
          this.data.updateTicketDetails(data);
          this.router.navigate(['safety']);
        }   
      );
    } else {
      alert("Please select passenger for checkin");
    }
  }
}
