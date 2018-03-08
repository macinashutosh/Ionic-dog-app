import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {
  apiKey = '';
  url;
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'https://dog.ceo/api/breeds/image/random';
  }
  getDog(apiString){
  	console.log(apiString)
  	return this.http.get(apiString)

  }

}
