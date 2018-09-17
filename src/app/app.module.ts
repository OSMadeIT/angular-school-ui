import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  

import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { AppRoutingModule } from './app-routing.module';
import { EnterResultsComponent } from './enter-results/enter-results.component';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    EnterResultsComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
