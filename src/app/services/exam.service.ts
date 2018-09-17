import { Exams } from './../exams';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private examsUrl: string = 'http://localhost:8080/angular-school-test/api/exams/';

  constructor(private http: HttpClient) { }

  getExams(): Observable<Exams[]>{
    return this.http.get<Exams[]>(this.examsUrl + 'list');
  }
}
