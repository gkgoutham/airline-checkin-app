import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  title = 'airline-checkin-app';
  message:string;
  
  constructor(private data: DataService,private cd : ChangeDetectorRef){
    setInterval(() => { this.cd.detectChanges(); }, 100);
  }

  ngOnInit(): void {
    this.data.currentPage.subscribe(message => this.message = message);
  }
  

  
}
