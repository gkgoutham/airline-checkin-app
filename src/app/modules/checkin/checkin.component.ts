import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  checkinForm: FormGroup;
  submitted = false;
  errorMsg: any;
  ticketInfo: Ticket;
  boardingPass : string;
  message: string = "checkin";
  

  constructor(private formBuilder: FormBuilder,
    public activateRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService,
    private data: DataService) {

  }

  ngOnInit() {
    this.checkinForm = this.formBuilder.group({
      bookingId: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    this.data.currentMessage.subscribe(ticket => this.ticketInfo = ticket);
    this.data.errorMessage.subscribe(err => this.errorMsg = err);  
    this.data.boardingPa.subscribe(pass => this.boardingPass = pass);  
    this.data.updateCurrentPage(this.message);
  }

  get f() { return this.checkinForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.checkinForm.invalid) {
      return;
    }
    debugger
    this.apiService.getTicketDetails(this.checkinForm.value.bookingId, this.checkinForm.value.lastName)
    .subscribe(
      (data: Ticket) => {        
        this.data.updateTicketDetails(data);
        this.router.navigate(['ticket']);
      }      
    );
    if(this.boardingPass == 'boarding-pass'){
      console.log('aaaaaaaaaaaaaaaaaaa boarding pass');
    }
  }

  getBoardingPass(){
    this.apiService.getBoardingPass(this.checkinForm.value.bookingId, this.checkinForm.value.lastName)
    .subscribe(
      (data: Ticket) => {        
        this.data.updateTicketDetails(data);
        this.router.navigate(['boarding']);
      }      
    );
  }

  onReset() {
    this.submitted = false;
    this.checkinForm.reset();
  }
}
