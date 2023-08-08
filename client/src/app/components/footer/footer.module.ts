import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'angular-material/angular-material.module';
import { FooterComponent } from './footer.component';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
