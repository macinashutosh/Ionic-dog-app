import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  result = [];
  callString :string;

  displayPicture :string;
  displayName :string;
  constructor(public navCtrl: NavController,private weatherProvider:WeatherProvider) {

  }

  ionViewWillEnter(){
  	this.callString = 'https://dog.ceo/api/breeds/list/all'
  	this.weatherProvider.getDog(this.callString).subscribe(weather =>{
  		//console.log(weather['message'])
  		this.result = Object.keys(weather['message'])
  		console.log(this.result)
  	});


  }

  itemSelected(selectedItem){

    this.weatherProvider.getDog('https://dog.ceo/api/breed/'+selectedItem+'/images/random').subscribe(weather =>{
      console.log(weather['message']);
      this.result = []
      this.displayPicture = weather['message'];
      this.displayName = ''+selectedItem;
    });

    console.log(selectedItem)
  }
  refreshFunction(){
    this.displayPicture ='';
    this.displayName =''
    this.callString = 'https://dog.ceo/api/breeds/list/all'
    this.weatherProvider.getDog(this.callString).subscribe(weather =>{
      //console.log(weather['message'])
      this.result = Object.keys(weather['message'])
      console.log(this.result)
    });
  }

  

}
