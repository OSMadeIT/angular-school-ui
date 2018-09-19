import { ExamComponent } from './exam/exam.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { StudentsComponent } from './students/students.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { EnterResultsComponent } from './enter-results/enter-results.component';

   
const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'exams', component: ExamComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'enter-results', component: EnterResultsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/register', component: NewStudentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
