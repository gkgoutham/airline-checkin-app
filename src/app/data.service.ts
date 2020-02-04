import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ticketDetails = new BehaviorSubject<Ticket>(null);
  currentMessage = this.ticketDetails.asObservable();

  private page = new BehaviorSubject<string>(null);
  currentPage = this.page.asObservable();

  constructor() { }

  updateTicketDetails(message: Ticket) {
    this.ticketDetails.next(message)
  }

  updateCurrentPage(page: string) {
    this.page.next(page);
  }
}
