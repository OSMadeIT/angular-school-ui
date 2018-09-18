import { Observable } from 'rxjs';
import { Results } from '../results';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ResultService {

  private resultsUrl: string = 'http://localhost:8080/angular-school-test/api/results/';

  constructor(private http: HttpClient) { }

  getResults(): Observable<Results[]>{
    return this.http.get<Results[]>(this.resultsUrl +'list');
  }

  postResults(result: Results): Observable<Results[]>{
    return this.http.post<Results[]>(this.resultsUrl +'create',  result, httpOptions);
  }
}
