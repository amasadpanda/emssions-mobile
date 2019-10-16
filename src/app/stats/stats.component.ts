import { Component, OnInit } from '@angular/core';


declare let ApexCharts: any;

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.scatter();
  }

  scatter() {

    var options = {
      chart: {
        height: 350,
        type: 'scatter',
        zoom: {
          type: 'xy'
        }
      },
      colors: ['#de3c4b', '#abe188'],
      series: [{
          name: 'Above',
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          }),
        },
        {
          name: 'Below',
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        },
      ],
      dataLabels: {
        enabled: false
      },
      grid: {
        xaxis:{
          lines: {
            show: false
          }
        },
        yaxis:{
          lines: {
            show: false
          }
        },
        
      },
      xaxis: {
        type: 'datetime',
        labels: {
          style: {
            colors: 'white',
          },
        }
      },
      yaxis: {
        max: 70,
        labels: {
          style: {
            color: 'white',
          }
        }
      },
      fill: {
        type:'solid',
      },
      markers: {
        size: [5, 3],
        colors: 'red',
        strokeWidth: 0,
        strokeOpacity: 0.0,
        fillOpacity: 1,
        shape: "circle",
        radius: 5,
        onClick: undefined,
        onDblClick: undefined,
        hover: {
          size: undefined,
          sizeOffset: 3
        }
      }
    }

    var chart = new ApexCharts(
      document.querySelector("#chart"),
      options
    );

    chart.render();

    /*
    // this function will generate output in this format
    // data = [
        [timestamp, 23],
        [timestamp, 33],
        [timestamp, 12]
        ...
    ]
    */
    function generateDayWiseTimeSeries(baseval, count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([baseval, y]);
        baseval += 86400000;
        i++;
      }
      return series;
    }
  
  }

}