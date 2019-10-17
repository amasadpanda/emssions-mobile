import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from '../data-fetcher.service';


declare let ApexCharts: any;

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  Data;

  constructor(private dataSource: DataFetcherService) {
    this.dataSource.getGCV(20)
    .subscribe(data => {
      this.Data = data;
      this.scatter();
    });
  }

  width; height;

  ngOnInit() {

    this.width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    this.height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
  }

  scatter() {
    console.log(this.Data.above)
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
          data: this.Data.above,
        },
        {
          name: 'Below',
          type: 'scatter',
          data: this.Data.below,
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
  
  }

}