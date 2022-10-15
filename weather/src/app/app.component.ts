import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather';




  constructor(private weatherservice: WeatherService) {
  }

  ngOnInit(): void {  

    this.getdata();
  }

  getdata(): void {

    this.weatherservice.getWeatherData().subscribe(data => {

      console.log(data);
    })
  }
}
