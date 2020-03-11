import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ticketDetails = new BehaviorSubject<Ticket>(null);
  currentMessage = this.ticketDetails.asObservable();

  private errorMessages = new BehaviorSubject<string>(null);
  errorMessage = this.errorMessages.asObservable();

  private page = new BehaviorSubject<string>(null);
  currentPage = this.page.asObservable();

  private boadingPass = new BehaviorSubject<string>(null);
  boardingPa = this.boadingPass.asObservable();

  constructor() { }

  updateTicketDetails(message: Ticket) {
    this.ticketDetails.next(message)
  }

  updateCurrentPage(page: string) {
    this.page.next(page);
  }

  sendErrorMessage(message: string) {
    this.errorMessages.next(message);
  }

  getBoardingPass(pass: string) {
    this.boadingPass.next(pass);
  }
}
