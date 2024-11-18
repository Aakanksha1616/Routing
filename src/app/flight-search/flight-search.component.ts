import { Component } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {


  //services logic
 
 // userService:UserService;
  constructor(private userService:UserService) {  //(private userService:UserService) = request ki hai userService Class ko
   // this.userService = new UserService();
  }

  ngOnInit(){
   let userData =  this.userService.getUserInfo()
      console.log("Flight Search", userData)
  }
}
