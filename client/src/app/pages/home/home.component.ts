import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('HELLO DUDE');
  }

  openLinkedIn() {
    window.open("https://www.linkedin.com/in/ruben-ortiz-third/", "_blank");
    window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here";
  }

  openEmail() {
    window.location.href = "mailto:RubenOrtizThird@gmail.com?subject=Business Inquiry&body=";
  }

}
