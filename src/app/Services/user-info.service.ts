import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  
  private selectedCityName:string="";
  constructor() { }

  getUserInfo() {


    let obj = {
      name: "David",
      emailId: "david@gmail.com",
      mobNo: 9898626548,
      city: "Pune"
    }
    return obj; // return value of the data property

  }

  setCity(city:string){
     this.selectedCityName = city;
  }

  getCity(){
     return this.selectedCityName;
  }
}
