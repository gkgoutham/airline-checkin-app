import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://localhost:8080/webcheckin/";

  constructor(private httpClient: HttpClient,
    private dataService: DataService) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,   
     // this.dataService.sendErrorMessage('Data not found');
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  public getTicketDetails(bookingId: string,lastName: string):Observable<any> {
    let headers = new HttpHeaders().set("X-CustomHeader", "custom header value")
  .append('Content-Type', 'application/json')
  .append("Access-Control-Allow-Origin", "*")
  .append("Accept", "application/json");
    return this.httpClient.get(this.SERVER_URL+'ticket-info/'+bookingId+'/'+lastName,{headers}).pipe(catchError(this.handleError));
  }

  public getBoardingPass(bookingId: string,lastName: string):Observable<any> {
    let headers = new HttpHeaders().set("X-CustomHeader", "custom header value")
  .append('Content-Type', 'application/json')
  .append("Access-Control-Allow-Origin", "*")
  .append("Accept", "application/json");
    return this.httpClient.get(this.SERVER_URL+'boarding-pass/'+bookingId+'/'+lastName,{headers}).pipe(catchError(this.handleError));
  }

  public checkInPassengerDetails(ticket :Ticket):Observable<any> {
    let headers = new HttpHeaders().set("X-CustomHeader", "custom header value")
  .append('Content-Type', 'application/json')
  .append("Access-Control-Allow-Origin", "*")
  .append("Accept", "application/json");
    return this.httpClient.post(this.SERVER_URL+'check-in/',ticket,{headers}).pipe(catchError(this.handleError));
  }
}
