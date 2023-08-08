import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobDescriptionComponent } from '../job-description/job-description.component';
import { MatTooltipDefaultOptions } from '@angular/material/tooltip';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  isMobile = false;

  ngOnInit() {

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

  openJobDescription(jobSelection: any) {

    if(!this.isMobile) { // Desktop Modal

      const dialogRef = this.dialog.open(JobDescriptionComponent, {
        data: {job: jobSelection},
        maxWidth: '40vw',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });

    } else { // Mobile Modal

      const dialogRef = this.dialog.open(JobDescriptionComponent, {
        data: {job: jobSelection},
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });

    }
  }

}
