import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { HomeComponent } from './components/home/home.component';
import { DisplayWeatherComponent } from './components/display-weather/display-weather.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,


  ],
  providers: [WeatherService, HttpClientModule, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
