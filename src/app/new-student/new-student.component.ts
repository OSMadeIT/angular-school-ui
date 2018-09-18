import { Component, OnInit } from '@angular/core';
import { StudentService } from './../services/student.service';

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
