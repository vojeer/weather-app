
import { Component, OnInit } from '@angular/core';
import { indianCities } from 'src/shared/indian-cities';
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
  searchText = '';
  cities = indianCities;
  term!: string;
  weatherInfo!: WeatherResponse

  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman',
  ]
  constructor(private weatherservice: WeatherService) {
  }

  ngOnInit(): void {  
   
  //  this.getdata();
   let data = Helper.FarenhieghtToCalcius(98.6)
   console.log(data)

  }

  getvalue(city: string):void{
 
 
   const cityName =  city.toUpperCase()
   console.log(cityName);
}

  getdata(): void {

    this.weatherservice.getWeatherData(this.city).subscribe((data:WeatherResponse) => {

      this.weatherInfo = data;
      console.log(this.weatherInfo)
    })
  }
}
