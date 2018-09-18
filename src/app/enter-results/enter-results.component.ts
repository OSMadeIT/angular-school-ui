import { ResultService } from './../services/result.service';
import { StudentService } from './../services/student.service';
import { ExamService } from './../services/exam.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-results',
  templateUrl: './enter-results.component.html',
  styleUrls: ['./enter-results.component.css']
})
export class EnterResultsComponent implements OnInit {
  public exams = [];
  public students = [];
  public results = [];
  studentId;
  examId;
  math;
  english;
  kiswahili;
  biology;
  chemistry;
  physics;
  agriculture;
  geography;
  computerStudies;
  totalMark;
  meanMark;
  meanGrade;
  resultBody;

  constructor(private examService: ExamService,
              private studentService: StudentService,
              private resultService: ResultService) { }

  ngOnInit() {
    this.examService.getExams()
      .subscribe(examData => this.exams = examData);
    
    this.studentService.getStudents()
      .subscribe(studentData => this.students = studentData);
  }

  addResult(){
    this.resultBody={
      studentId: this.studentId,
      examId:this.examId,
      math:this.math,
      english:this.english,
      kiswahili:this.kiswahili,
      biology:this.biology,
      chemistry:this.chemistry,
      physics:this.physics,
      agriculture:this.agriculture,
      geography:this.geography,
      computerStudies:this.computerStudies,
      totalMark:this.totalMark,
      meanMark:this.meanMark,
      meanGrade:this.meanGrade
    }

    this.resultService.postResults(this.resultBody)
      .subscribe(resultData => this.results = resultData);
  }
}
