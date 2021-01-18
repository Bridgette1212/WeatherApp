import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { DisplayWeatherComponent } from './components/display-weather/display-weather.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'display-weather', component: DisplayWeatherComponent },
  { path: 'home', component: HomeComponent }

];


// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
// export class AppRoutingModule { }


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
