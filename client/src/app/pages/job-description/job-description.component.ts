import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-job-description",
  templateUrl: "./job-description.component.html",
  styleUrls: ["./job-description.component.scss"],
})
export class JobDescriptionComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  // bioDisplayed: any;
  // bioEY =
  // bioCRS = "CRS BIO";
  // bioCBI = "CBI BIO";
  simpleItems = [1,2,3,4,5]

  ngOnInit(): void {
    console.log("DATA: ", this.data);

    // switch (this.data.job) {
    //   case "EY": {
    //     this.bioDisplayed = this.bioEY;
    //     break;
    //   }
    //   case "CRS": {
    //     this.bioDisplayed = this.bioCRS;
    //     break;
    //   }
    //   case "CBI": {
    //     this.bioDisplayed = this.bioCBI;
    //     break;
    //   }
    //   default: {
    //     console.log("DEFAULT");
    //     break;
    //   }
    // }
  }
}
