import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  isMobile = false;

  ngOnInit(): void {

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
      console.log('MOBILE');
      this.isMobile = true;
    } else {
      // false for not mobile device
      console.log('DESKTOP');
      this.isMobile = false;
    };
  }

  openLinkedIn() {
    window.open("https://www.linkedin.com/in/ruben-ortiz-third/", "_blank");
  }

  openEmail() {
    window.location.href = "mailto:RubenOrtizThird@gmail.com?subject=Business Inquiry&body=";
  }

}
