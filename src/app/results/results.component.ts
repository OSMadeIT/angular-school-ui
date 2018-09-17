import { ResultService } from './../result.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public results = [];

  constructor() { }

  ngOnInit() {
    this.ResultService.getResults()
      .subscribe(data => this.results = data);
  }

}
