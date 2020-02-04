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
  error: any;
  ticketInfo: Ticket;
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
    this.data.currentMessage.subscribe(message => this.ticketInfo = message);
    this.data.updateCurrentPage(this.message);
  }

  get f() { return this.checkinForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.checkinForm.invalid) {
      return;
    }

    this.apiService.getTicketDetails(this.checkinForm.value.bookingId, this.checkinForm.value.lastName).subscribe(
      (data: Ticket) => {
        this.data.updateTicketDetails(data);
        this.router.navigate(['ticket']);
      }, // success path
      error => this.error = error // error path      
    );
    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.checkinForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.checkinForm.reset();
  }
}
