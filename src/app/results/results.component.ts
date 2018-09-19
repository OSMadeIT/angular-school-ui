import { ResultService } from '../services/result.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public results = [];

  constructor(private service: ResultService) { 
   }

   options: Object;

  ngOnInit() {
    this.service.getResults()
      .subscribe(data => {
        this.results = data

        this.options = {
          title : { text : 'Performance Chart' },
          xAxis : {categories: ['Agr', 'Bio', 'Math', 'Chem', 'Phyc', 'Comp', 'Kisw', 'Geo', 'Eng'],
                   title: {
                     text: 'Subjects'}},
          series: [{
              data: [data[0].agriculture, data[0].biology,
              data[0].math, data[0].chemistry, data[0].physics,
              data[0].computerStudies, data[0].kiswahili, data[0].geography,
              data[0].english],
          }]
      };
      });
  }

}
