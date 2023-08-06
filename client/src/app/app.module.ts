import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Pages
import { HomeModule } from './pages/home/home.module';
import { JobDescriptionModule } from './pages/job-description/job-description.module';

// Components
import { AngularMaterialModule } from 'angular-material/angular-material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HomeModule,
    JobDescriptionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
