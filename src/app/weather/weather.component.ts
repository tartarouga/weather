import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { GeoDbService } from 'wft-geodb-angular-client';
import { GeoResponse } from 'wft-geodb-angular-client/lib/model/geo-response.model';
import { PlaceSummary } from 'wft-geodb-angular-client/lib/model/place-summary.model';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  wth: any;
  cities: any;



  constructor(private weather: WeatherService, private geoDbService: GeoDbService) { }

  ngOnInit() {

    this.geoDbService.findPlaces({

      countryIds: ["FR"],
      types: ["CITY"],
      limit: 10,
      offset: 0
    })
      .subscribe(
        (response: GeoResponse<PlaceSummary[]>) => {
          console.log(response.data)
          this.cities = response.data;

        }
      );

  }

  onSubmit(formulaire: NgForm) {

    console.log('test');

    this.weather.getCurrentWeather(formulaire.value.city).subscribe((res) => {
      console.log(formulaire)
      console.log(res);
      this.wth = res;

    });
  }

}


