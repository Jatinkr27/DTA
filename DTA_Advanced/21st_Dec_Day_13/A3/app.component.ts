import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  eventArray:any[] =  [ 
    { eventid:1, ename : "Microsoft Azure -  AI Fundamentals",  elink :  "https://azure.microsoft.com/en-in/", date : "January 12, 2023", format : "Online", time : "3:00 PM IST"},
    { eventid:2, ename : "Google Cloud - Hackathon",  elink :  "https://cloud.google.com/", date : "January 14, 2023", format : "Offline", time : "4:00 PM IST"},
    { eventid:3, ename : "AWS - Hacky New Year",  elink :  "https://aws.amazon.com/", date : "January 18, 2023", format : "Online", time : "4:30 PM IST"}
    ];

}
