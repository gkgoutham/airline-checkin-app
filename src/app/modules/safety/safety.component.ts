import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.css']
})
export class SafetyComponent implements OnInit {

  pageName :string = 'safety';
  checkinForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private data: DataService,
    public router: Router){}  

  ngOnInit() {
    this.checkinForm = this.formBuilder.group({
      acceptTerms: ['', Validators.required],     
    });
    this.data.updateCurrentPage(this.pageName);
  }
  get f() { return this.checkinForm.controls; }

  onAccept(){
    this.router.navigate(['boarding']);
  }
}
