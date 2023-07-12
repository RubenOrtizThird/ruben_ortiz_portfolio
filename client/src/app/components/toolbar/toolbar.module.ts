import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { AngularMaterialModule } from 'angular-material/angular-material.module';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
