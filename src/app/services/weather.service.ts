import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
@Injectable()
export class WeatherService {


  constructor(public http: HttpClient) {
    console.log('open weather service connected');
   }
   getWeatherDetails() {return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=Johannesburg,ind&units=metric&appid=1ffaa80ea2d33fe521d4f7f22167adcf').map(res => res); }
}
