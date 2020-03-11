import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-boarding',
  templateUrl: './boarding.component.html',
  styleUrls: ['./boarding.component.css']
})
export class BoardingComponent implements OnInit {

  pageName :string = 'boarding';
  ticketDetails: Ticket;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(data => { this.ticketDetails = data });
    this.data.updateCurrentPage(this.pageName);
  }

}
