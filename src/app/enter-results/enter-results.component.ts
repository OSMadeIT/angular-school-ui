import { ExamService } from './../services/exam.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-results',
  templateUrl: './enter-results.component.html',
  styleUrls: ['./enter-results.component.css']
})
export class EnterResultsComponent implements OnInit {
  public exams = [];

  constructor(private service: ExamService) { }

  ngOnInit() {
    this.service.getExams()
      .subscribe(data => this.exams = data);
  }
}
