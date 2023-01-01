
import { Component, OnDestroy, OnInit } from '@angular/core';
import { indianCities } from 'src/shared/indian-cities';
import { SubSink } from 'subsink';
import { Helper } from './helper';
import { WeatherResponse } from './interface';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private weatherservice: WeatherService) {
  }

  ngOnInit(): void {

  }
}
