import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

    gridApi;
    gridColumnApi;


    columnDefs = [
        {headerName: 'Time' , field: 'time', sortable: true, cellClass: 'grid-align'},
        {headerName: 'GTG Load', field: 'gtg_load', sortable: true, cellClass: 'grid-align'},
        {headerName: 'Inlet Chiller Status', field: 'chiller' , sortable: true, cellClass: 'grid-align'},
        {headerName: 'Duct Burner', field: 'duct', sortable: true},
        {headerName: 'GTG Power', field: 'gtg_power', sortable: true},
        {headerName: 'STG Power', field: 'stg_power', sortable: true},
        {headerName: 'Net Power', field: 'net_power', sortable: true},
        {headerName: 'Fuel Flow', field: 'fuel_flow', sortable: true},
        {headerName: 'CO2e', field: 'co2e', sortable: true},

    ];

    rowData = [
        { gtg_load: 'some', chiller: 'value', duct: 3500, gtg_power: 1020, stg_power: 'reeee', net_power: 'hello', fuel_flow: 'world', co2e: 12345 },
        { gtg_load: 'some', chiller: 'value', duct: 350, gtg_power: 1020, stg_power: 'reeee', net_power: 'hello', fuel_flow: 'world', co2e: 12345 },
        { gtg_load: 'some', chiller: 'value', duct: 35, gtg_power: 1020, stg_power: 'reeee', net_power: 'hello', fuel_flow: 'world', co2e: 12345 },
        { gtg_load: 'some', chiller: 'value', duct: 3, gtg_power: 1020, stg_power: 'reeee', net_power: 'hello', fuel_flow: 'world', co2e: 12345 },
        { gtg_load: 'some', chiller: 'value', duct: 5, gtg_power: 1020, stg_power: 'reeee', net_power: 'hello', fuel_flow: 'world', co2e: 12345 },
        { gtg_load: 'some', chiller: 'value', duct: 45000, gtg_power: 1020, stg_power: 'reeee', net_power: 'hello', fuel_flow: 'world', co2e: 12345 },
        { gtg_load: 'some', chiller: 'value', duct: 85000, gtg_power: 1020, stg_power: 'reeee', net_power: 'hello', fuel_flow: 'world', co2e: 12345 },
        { gtg_load: 'some', chiller: 'value', duct: 95000, gtg_power: 1020, stg_power: 'reeee', net_power: 'hello', fuel_flow: 'world', co2e: 12345 },
        { gtg_load: 'some', chiller: 'value', duct: 135000, gtg_power: 1020, stg_power: 'reeee', net_power: 'hello', fuel_flow: 'world', co2e: 12345 },
    ];


  constructor() { }

  ngOnInit() {

  }
  
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    //this.gridApi.sizeColumnsToFit();
  }

  getRowHeight() : Number {
      return (window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight)/25;
  }


}