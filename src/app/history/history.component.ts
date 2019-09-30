import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

    columnDefs = [
        {headerName: 'GTG Load', field: 'gtg_load' },
        {headerName: 'Inlet Chiller Status', field: 'chiller' },
        {headerName: 'Duct Burner', field: 'duct'},
        {headerName: 'GTG Power', field: 'gtg_power'},
        {headerName: 'STG Power', field: 'stg_power'},
        {headerName: 'Net Power', field: 'net_power'},
        {headerName: 'Fuel Flow', field: 'fuel_flow'},
        {headerName: 'CO2e', field: 'co2e'},

    ];

    rowData = [
        { gtg_load: 'some', chiller: 'value', duct: 35000, gtg_power: 1020, stg_power: 'reeee', net_power: 'hello', fuel_flow: 'world', co2e: 12345 },
        { gtg_load: 'some', chiller: 'value', duct: 35000, gtg_power: 1020, stg_power: 'reeee', net_power: 'hello', fuel_flow: 'world', co2e: 12345 },
        { gtg_load: 'some', chiller: 'value', duct: 35000, gtg_power: 1020, stg_power: 'reeee', net_power: 'hello', fuel_flow: 'world', co2e: 12345 },
        { gtg_load: 'some', chiller: 'value', duct: 35000, gtg_power: 1020, stg_power: 'reeee', net_power: 'hello', fuel_flow: 'world', co2e: 12345 },
        { gtg_load: 'some', chiller: 'value', duct: 35000, gtg_power: 1020, stg_power: 'reeee', net_power: 'hello', fuel_flow: 'world', co2e: 12345 },
        { gtg_load: 'some', chiller: 'value', duct: 35000, gtg_power: 1020, stg_power: 'reeee', net_power: 'hello', fuel_flow: 'world', co2e: 12345 },
        { gtg_load: 'some', chiller: 'value', duct: 35000, gtg_power: 1020, stg_power: 'reeee', net_power: 'hello', fuel_flow: 'world', co2e: 12345 },
        { gtg_load: 'some', chiller: 'value', duct: 35000, gtg_power: 1020, stg_power: 'reeee', net_power: 'hello', fuel_flow: 'world', co2e: 12345 },
        { gtg_load: 'some', chiller: 'value', duct: 35000, gtg_power: 1020, stg_power: 'reeee', net_power: 'hello', fuel_flow: 'world', co2e: 12345 },
    ];


  constructor() { }

  ngOnInit() {
  }

}