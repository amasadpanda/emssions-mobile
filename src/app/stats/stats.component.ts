import { Component, OnInit } from '@angular/core';


declare let ApexCharts: any;

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor() { }

  width; height;

  ngOnInit() {

    this.width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    this.height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

    this.scatter();
  }

  scatter() {

    var options = {
      annotations: {
        yaxis: [
          {
            // in a datetime series, the x value should be a timestamp, just like it is generated below
            y: 20,
            size: 10,
            strokeDashArray: 1,
            borderColor: "#775DD0",
            label: {
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0",
                fontSize: '3vw',
              },
              text: "Limit"
            }
          },
        ]
      },
      chart: {
        height: this.height*.9,
        type: 'scatter',
        zoom: {
          enabled: false,
          type: ''
        }, 
      },
      colors: ['#de3c4b', '#abe188', '#fff'],
      series: [
        {
          name: 'Above',
          type: 'scatter',
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          }),
        },
        {
          name: 'Below',
          type: 'scatter',
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
            fontSize: '2vw',
          },
        },
        tooltip: {
          enabled: false,
        }
      },
      yaxis: {
        max: 70,
        labels: {
          style: {
            color: 'white',
            fontSize: '2vh',
          }
        }
      },
      fill: {
        type:'solid',
      },
      markers: {
        size: [(this.height+ this.width)/200, (this.height + this.width)/250, 0],
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
      }, 
      tooltip: {
          enabled: true,
          style: {
            fontSize: '6vw',
            fontFamily: undefined
          },
          onDatasetHover: {
              highlightDataSeries: false,
          },
          x: {
              show: true,
              //formatter: (e) => (new Date(e)).toISOString(),
              //formatter: (e => "hello"),
              format: 'dd-MMM-yyyy hh:mm',
          },
          y: {
              show: true,
              formatter: undefined,
              title: {
                  formatter: (seriesName) => seriesName,
              },
          },
          z: {
            show: true,
              formatter: undefined,
              title: 'Size: '
          },
          marker: {
              show: true,
          },
          fixed: {
              enabled: false,
              position: 'topRight',
              offsetX: 0,
              offsetY: 0,
          },
      },
      legend: {
        fontSize: this.width/80,
        labels: {
          colors: 'white',
        }, 
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