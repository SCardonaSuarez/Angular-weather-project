import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetCitiesService } from '../../services/getCities.service';
import { WeatherService } from '../../services/weather.service';
import { Cities } from '../../interfaces/cities.interface';
import { CityWeather } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit, OnDestroy {
  termino: string = '';
  Error: boolean = false;
  arraySubcription: Subscription[] = [];
  citiesArray: Cities[] = [];
  citiesResults: CityWeather[] = [];
  currentTemp!: string;
  weatherImages: string[] = [
    'https://i.ibb.co/8YSyCVf/cold-Weather.jpg',
    'https://i.ibb.co/pjfgvfr/warm-Weather.jpg',
    'https://i.ibb.co/3mdhbKM/hot-Weather-1.jpg',
  ];

  constructor(
    private searchService: WeatherService,
    private searchCities: GetCitiesService
  ) {}

  ngOnInit(): void {
    this.getCities();
  }
  ngOnDestroy(): void {
    this.arraySubcription.forEach((e) => e.unsubscribe());
  }

  search(): void {
    this.Error = false;

    this.arraySubcription.push(
      this.searchService.searchCity(this.termino).subscribe(
        (c) => {
          this.citiesResults.push(c);
        },
        (err) => {
          this.Error = true;
        }
      )
    );

    console.log(this.citiesResults);
  }

  getCities(): void {
    this.arraySubcription.push(
      this.searchCities.getCities().subscribe((resp: Cities[]) => {
        this.citiesArray = resp;
      })
    );
  }

  changeDegrees(measure: string): string {
    if (measure === 'c') {
      return (this.currentTemp = 'c');
    } else if (measure === 'f') {
      return (this.currentTemp = 'f');
    }

    return (this.currentTemp = 'k');
  }

  changeCurrentTemp(degree: number, measure: string): number {
    let newDegree = degree;

    if (measure === 'c') {
      return newDegree;
    } else if (measure === 'f') {
      return (newDegree * 9.0) / 5.0 + 32;
    } else {
      return newDegree + 273.15;
    }
  }

  weatherImg(degree: number): string {
    if (degree < 19) {
      return this.weatherImages[0];
    } else if (degree > 19.1 && degree < 26) {
      return this.weatherImages[1];
    } else {
      return this.weatherImages[2];
    }
  }

  weatherName(degree: number): string {
    if (degree < 19) {
      return 'cold';
    } else if (degree > 19.1 && degree < 26) {
      return 'warm';
    } else {
      return 'hot';
    }
  }

  reload(){
    
  }
}
