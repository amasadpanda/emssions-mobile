import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from '../data-fetcher.service';
import { interval } from 'rxjs';

declare let ApexCharts: any;

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  width;
  height;
  Data;
  Stats : number[] = [0,0,0,0,0];

  constructor(private dataSource: DataFetcherService) {
    this.initData();

  }

  initData(){
    this.dataSource.getData()
        .subscribe(data => {
          this.Data = data;
        });

    interval(1000 * 1).subscribe( x => {
      this.dataSource.getStats()
              .subscribe(stats => this.Stats = stats);
    });
    
  }

  ngOnInit() {
    this.width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    this.height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

    this.line();
    this.gauges();
  }

  line() {
   var options = {
      chart: {
        type: 
          'line',
          sparkline: {
            enabled: true,
          }
      },
       animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
                speed: 1000
            }
        },
      series: [{
        name: 'CO2',
        data: this.Data,
      }],
      stroke: {
        show: true,
        lineCap: 'butt',
        colors: undefined,
        width: this.width/200,
        dashArray: 0,      
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
              formatter: (e) => (new Date(e)).toISOString(),
              format: 'dd MMM yyyy hh',
          },
          y: {
              formatter: undefined,
              title: {
                  formatter: (seriesName) => seriesName,
              },
          },
          z: {
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
      xaxis: {
        type: 'datetime',
      },

    }
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    var lastDate = (this.Data[this.Data.length - 1][0]);

    document.querySelector("#week").addEventListener('click', function (e) {
      chart.updateOptions({
        xaxis: {
          min: lastDate - (3600 * 1000 * 24 * 7),
          max: lastDate,
        }
      })
    })

    document.querySelector("#day").addEventListener('click', function (e) {
      chart.updateOptions({
        xaxis: {
          min: lastDate - (3600 * 1000 * 24),
          max: lastDate,
        }
      })
    })

    document.querySelector("#month").addEventListener('click', function (e) {
      chart.updateOptions({
        xaxis: {
          min: lastDate - (3600 * 1000 * 24 * 31),
          max: lastDate,
        }
      })
    })

     document.querySelector("#month6").addEventListener('click', function (e) {
      chart.updateOptions({
        xaxis: {
          min: lastDate - (3600 * 1000 * 24 * 31 * 6),
          max: lastDate,
        }
      })
    })

    document.querySelector("#year").addEventListener('click', function (e) {
      chart.updateOptions({
        xaxis: {
          min: lastDate  - (3600 * 1000 * 24 * 365),
          max: lastDate,
        }
      })
    })

    document.querySelector("#all").addEventListener('click', function (e) {
      chart.updateOptions({
        xaxis: {
          min: undefined,
          max: undefined,
        }
      })
    })

    document.querySelector("#ytd").addEventListener('click', function () {
       chart.updateOptions({
        xaxis: {
          min: new Date(new Date().getFullYear(), 0, 1),
          max: lastDate,
        }
      })
    })

    /*interval(1000 * 60).subscribe( x => {
        this.dataSource.getNextSecond()
              .subscribe(data => this.Data.push(data));
        chart.updateSeries([{
            data: this.Data
        }]);
    });*/

  }

  gauges() {
    var options = {
      chart: {
        type: 'radialBar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
           hollow: {
            margin: 0,
            size: '80%',
            background: '#25283d',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '70%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            showOn: 'always',
            name: {
              offsetY: '-10vh',
              show: true,
              color: '#888',
              fontSize: '3vw'
            },
            value: {
              formatter: function(val) {
                return parseInt(val);
              },
              color: '#fff',
              fontSize: '7vw',
              show: true,
              offsetY: '10vh',
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#ABE5A1'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      series: [75],
      stroke: {
        lineCap: 'round'
      },
      labels: ['Percent'],

    }

    var chart = new ApexCharts(
      document.querySelector("#gauges"),
      options
    );

    chart.render();
  }
}