import { Component, OnInit } from '@angular/core';
import { CountryService } from './country/country.service';
import { Country } from './country/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CountryService]
})
export class AppComponent implements OnInit {
  private countries: Country[];
  constructor(private countryService: CountryService) {}
  
  ngOnInit() {
  }

  onGetCountries() {
    this.countryService.getCountries()
      .subscribe(
        (countries: any) => this.countries = countries,
        (error) => console.log(error)
      );
  }
}
