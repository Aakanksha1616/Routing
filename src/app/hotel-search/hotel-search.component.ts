import { Component } from '@angular/core';
import { UserService } from '../Services/User.service';
import { UserInfoService } from '../Services/user-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.css'],
  providers:[]
})
export class HotelSearchComponent {

  cityName:string="";

  //services start 

 // userService: UserService;
  constructor(private userService: UserService, private userInfo:UserInfoService , private router:Router){
   // this.userService = new UserService();
  }

  ngOnInit(){
  //  let userData =  this.userService.getUserInfo();
  //  console.log("Hotel Search", userData);

  let userInfo = this.userInfo.getUserInfo();
  console.log("User Data from userInfo Service", userInfo);
  }

  searchHotel(){
    this.userInfo.setCity(this.cityName);
      this.router.navigate(['/hotels-list',this.cityName]);
  }
}
