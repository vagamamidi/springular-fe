import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/Rx';
// import 'rxjs/add/operator/map';

import { Country } from './country.model';

@Injectable()
export class CountryService {
  
  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get('http://localhost:8080/countries')
      .map(
        (response: HttpResponse<Country>) => {
          const data = response/* .json() */;
          console.log(response);
          return data;
        }
      );
    // return this.countries.slice();
  }
}
