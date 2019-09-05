import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  APIkey = '4e08a40341cc6c605b3a60488663188a';
  URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  unite = 'metric';
  cnt = '6';



  constructor(private http: HttpClient) { }

  getCurrentWeather(city) {
    return this.http.get(this.URL + city + '&units=' + this.unite + '&cnt=' + this.cnt + '&APPID=' + this.APIkey)
  }


}

