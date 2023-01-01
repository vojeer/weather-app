import { Component, OnDestroy, OnInit } from '@angular/core';
import { indianCities } from 'src/shared/indian-cities';
import { SubSink } from 'subsink';
import { Helper } from '../helper';
import { WeatherResponse } from '../interface';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit, OnDestroy {
  temperature!: number;
  title = 'weather';
  value = false
  city = 'NEWwdd DELHItrtrtr';
  searchText = '';
  cities = indianCities;
  term!: string;
  weatherInfo!: WeatherResponse;
  subsink = new SubSink()

  constructor(private weatherservice: WeatherService) {
  }

  ngOnInit(): void {

     this.getdata();
    let tempdata = Helper.FarenheightToCelcius(98.6)

  }

  getvalue(city: string): void {


    const cityName = city.toUpperCase()
    console.log(cityName);
  }

  getdata(): void {

    this.subsink.add(
      this.weatherservice.getWeatherData(this.city).subscribe((data) => {

        this.weatherInfo = data;
        this.temperature = this.weatherInfo?.current?.temperature;
        console.log(this.weatherInfo);
      },
      error => {
        console.log(error)
      }

      )
    )
  }

  ngOnDestroy(): void {
    
    this.subsink.unsubscribe();
  }
}
