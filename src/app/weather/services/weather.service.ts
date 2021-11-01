import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather, CityWeather } from '../interfaces/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  // private apiUrl: string = `api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;

  private key: string = '1bfc87c7e3bc8d4d33ec8bad8fb8e148';
  private apiUrl: string = `https://api.openweathermap.org/data/2.5`;

  constructor(private http: HttpClient) {}

  searchCity(termino: string): Observable<CityWeather> {
    const url = `${this.apiUrl}/weather?q=${termino}&units=metric&appid=${this.key}`;
    return this.http.get<CityWeather>(url);
  }
}
