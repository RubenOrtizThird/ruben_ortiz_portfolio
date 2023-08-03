import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  isMobile = false;

  ngOnInit() {

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
      console.log('MOBILE');
      this.isMobile = true;
    } else {
      // false for not mobile device
      console.log('DESKTOP');
      this.isMobile = true;
    };
  }

  openLinkedIn() {
    window.open("https://www.linkedin.com/in/ruben-ortiz-third/", "_blank");
    window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here";
  }

  openEmail() {
    window.location.href = "mailto:RubenOrtizThird@gmail.com?subject=Business Inquiry&body=";
  }

}
