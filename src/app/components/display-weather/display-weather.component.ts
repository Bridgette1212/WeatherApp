import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { WeatherService } from '../../services/weather.service';


@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  providers: [ WeatherService, HttpClientModule,HttpClient],
  styleUrls: ['./display-weather.component.css']
})
export class DisplayWeatherComponent implements OnInit {

  title = 'Weather Forecast';
  city:String;
  country:String;
  details=[];
  chart:any;
  constructor(private weatherservice:WeatherService) {   
     console.log("constructor called"); }

  ngOnInit() {
    this.weatherservice.getWeatherDetails().subscribe((data)=>{

      console.log(data);
     // this.details=data['list'];

     //filtering the five days forecast
      for(let i=0;i<data['list'].length;i+=2)
        {
          this.details.push(data['list'][i]);
        }
        this.city=data['city'].name;
        this.country=data['city'].country;

      
    });
  }

}

