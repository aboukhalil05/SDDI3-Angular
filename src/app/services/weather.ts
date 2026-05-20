import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Weather {
  private readonly apiKey = '9cf419252730e91519997ec2e422cb37';

  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<any> {
    const safeCity = encodeURIComponent(city.trim());
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${safeCity}&appid=${this.apiKey}&units=metric`);
  }
}
