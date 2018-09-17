import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { EnterResultsComponent } from './enter-results/enter-results.component';

   
const routes: Routes = [
  { path: 'results', component: ResultsComponent },
  { path: 'enter-results', component: EnterResultsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
