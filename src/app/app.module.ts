import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StatsComponent } from './stats/stats.component';

import { RouterModule, Routes} from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { HomeComponent } from './home/home.component';
import { DashComponent } from './dash/dash.component';
import { HistoryComponent } from './history/history.component';
import { ToolsComponent } from './tools/tools.component';

import {FlexLayoutModule } from '@angular/flex-layout';


const appRoutes = [
  { path: ''          , component: HomeComponent },
  { path: 'menu'      , component: HomeComponent },
  { path: 'dashboard' , component: DashComponent},
  { path: 'statistics', component: StatsComponent},
  { path: 'history'   , component: HistoryComponent},
  { path: 'tools'     , component: ToolsComponent},
  { path: 'settings'  , component: StatsComponent},
  { path: 'help'      , component: StatsComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
     FlexLayoutModule,
  ],
  declarations: [ AppComponent, HelloComponent, StatsComponent, TopbarComponent, HomeComponent, DashComponent, HistoryComponent, ToolsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
