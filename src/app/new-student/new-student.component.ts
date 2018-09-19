import { Component, OnInit } from '@angular/core';
import { StudentService } from './../services/student.service';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

type AOA = any[][];

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  student;
  firstName;
  lastName;
  regNo;
  studentBody;

  data: AOA;
  jsonData;

  reader;
  bstr: string;
  wb: XLSX.WorkBook;
  wsname: string;
  ws: XLSX.WorkSheet;
  vals;
  studentBtn;
  value1;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  addStudent() {
    
    this.studentBody = {
      firstName: this.firstName,
      lastName: this.lastName,
      regNo: this.regNo
    }

    this.studentService.postStudent(this.studentBody).subscribe((studentData) => {
        console.log(studentData);
      });
 }

}
