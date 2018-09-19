import { Component, OnInit } from '@angular/core';
import { StudentService } from './../services/student.service';
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
  excelData;

  data: AOA;

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

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      let excelUpload = ['firstName', 'lastName', 'regNo'];

      /* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
       this.excelData = (XLSX.utils.sheet_to_json(ws, { header: excelUpload }));
      // console.log(excelData);

      // send data to db
      for(let i=0; i < this.excelData.length; i++){
        if(i !== 0){
          this.studentBody = {
            regNo: this.excelData[i].regNo,
            firstName: this.excelData[i].firstName,
            lastName: this.excelData[i].lastName,
          }
        }

        this.studentService.postStudent(this.studentBody).subscribe((studentData) => {
          console.log(studentData);
        });
      }
    };
    reader.readAsBinaryString(target.files[0]);
  }

}
