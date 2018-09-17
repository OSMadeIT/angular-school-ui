import { Observable } from 'rxjs';
import { Results } from '../results';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private resultsUrl: string = 'http://localhost:8080/angular-school-test/api/results/';

  constructor(private http: HttpClient) { }

  getResults(): Observable<Results[]>{
    return this.http.get<Results[]>(this.resultsUrl+'list');
  }
}
