import { Component, OnInit } from '@angular/core';

declare let ApexCharts: any;

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var options = {
      chart: {
        type: 
          'line',
          sparkline: {
            enabled: true,
          }
      },
      series: [{
        name: 'sales',
        data: [30,40,35,50,49,60,70,91,125]
      }],
      xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997,1998,1999],
      }
    }
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  }

}