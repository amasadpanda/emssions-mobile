import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

   ngOnInit() {
      var imported = document.createElement('script');
      imported.src = 'https://cdn.jsdelivr.net/npm/apexcharts';
      document.head.appendChild(imported);
   }

}
