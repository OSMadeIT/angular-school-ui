import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ChartModule } from "angular2-highcharts";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { AppComponent } from "./app.component";
import { ResultsComponent } from "./results/results.component";
import { AppRoutingModule } from "./app-routing.module";
import { EnterResultsComponent } from "./enter-results/enter-results.component";
import { StudentsComponent } from "./students/students.component";
import { NewStudentComponent } from "./new-student/new-student.component";
import { ExamComponent } from "./exam/exam.component";

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    EnterResultsComponent,
    StudentsComponent,
    NewStudentComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
