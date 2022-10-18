import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Helper } from './helper';
import { WeatherResponse } from './interface';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather';
  value = false
  city = 'NEW DELHI';



  constructor(private weatherservice: WeatherService) {
  }

  ngOnInit(): void {  

    // this.getdata()

   let data = Helper.FarenhieghtToCalcius(98.6)
   console.log(data)

  }

  getdata(): void {

    this.weatherservice.getWeatherData(this.city).subscribe((data:WeatherResponse) => {

      console.log(data);
    })
  }
}
