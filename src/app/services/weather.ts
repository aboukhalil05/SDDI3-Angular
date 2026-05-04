import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Weather {
  constructor(private http: HttpClient) {}

  getWeatherData(): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=9cf419252730e91519997ec2e422cb37&units=metric`);
  }
}
