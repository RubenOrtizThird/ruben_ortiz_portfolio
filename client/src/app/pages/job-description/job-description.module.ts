import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobDescriptionComponent } from './job-description.component';
import { AngularMaterialModule } from 'angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [JobDescriptionComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class JobDescriptionModule { }
