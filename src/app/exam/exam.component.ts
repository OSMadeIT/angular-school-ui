import { ExamService } from './../services/exam.service';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

type AOA = any[][];

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {


  examName;
  examBody;
  excelData;
  uploadBtn;

  data: AOA;

  constructor(private examService: ExamService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.uploadBtn = document.getElementById('upload');
  }

  addExam() {

    this.examBody = {
      name: this.examName
    }

    this.examService.postExams(this.examBody).subscribe((examData) => {
      console.log(examData);
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

      let excelUpload = ['name'];

      /* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      this.excelData = (XLSX.utils.sheet_to_json(ws, { header: excelUpload }));
      // console.log(excelData);
      this.uploadBtn.addEventListener('click', () => {
        // send data to db
        for (let i = 0; i < this.excelData.length; i++) {
          if (i !== 0) {
            this.examBody = {
              name: this.excelData[i].name
            }
          }

          this.examService.postExams(this.examBody).subscribe((examData) => {
            console.log(examData);
          });
        }
      });

    };
    reader.readAsBinaryString(target.files[0]);
  }
}
