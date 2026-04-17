import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-weather',
  imports: [CommonModule],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather {
 country: any;
 temp: any;
 pres: any;
 hum: any;
 weatherData: any;
 constructor(private http: HttpClient, private cdr: ChangeDetectorRef){
  this.getWeatherData();
 }
 getWeatherData():void {
  this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=9cf419252730e91519997ec2e422cb37&units=metric').subscribe(
  (response: any) => {
    this.weatherData = response;
    this.country = response.sys.country;
    this.temp = response.main.temp;
    this.pres = response.main.pressure;
    this.hum = response.main.humidity;
    console.log('Données reçues:', this.weatherData);
    this.cdr.markForCheck();
  },
  (error: any) => {
    console.error('Erreur:', error);
  }
  );
 }
}
