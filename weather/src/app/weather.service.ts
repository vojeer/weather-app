import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor( private http: HttpClient) { }


  getWeatherData(data: string): Observable<any> {
    const params = new HttpParams().set('access_key',`${environment.weatherApiKey}`).set('query',`${data}`)

    return this.http.get<any>(environment.weatherApiUrl,{params}
     
    );
  }


}



