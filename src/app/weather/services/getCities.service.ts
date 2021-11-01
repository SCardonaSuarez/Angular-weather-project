import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cities } from '../interfaces/cities.interface';



@Injectable({
  providedIn: 'root'
})
export class GetCitiesService {

    urlCities: string = 'https://api.jsonbin.io/b/617f219c4a82881d6c6851e2'

  constructor(private http:HttpClient) { }


  getCities():Observable<Cities[]>{

    return this.http.get<Cities[]>(this.urlCities)
  }

}