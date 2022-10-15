import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http: HttpClient) { }


  getWeatherData(): Observable<any> {

    return this.http.get<any>(environment.weatherApiUrl,
      {
        headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderNAME, environment.XRapidAPIHostHeaderValue)
          .set(environment.RapidAPIKeyHeaderNAME, environment.XRapidAPIKeyHeaderValue)
      }
    );
  }
}



