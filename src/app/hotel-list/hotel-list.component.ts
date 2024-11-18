import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../Services/User.service';
import { UserInfoService } from '../Services/user-info.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css'],
  providers:[]
})
export class HotelListComponent {
  selectedCity:string | null =null;

  constructor(private activatedRout:ActivatedRoute, private userInfo:UserInfoService){
  this.selectedCity= this.activatedRout.snapshot.paramMap.get('city');

  // alert ("Selected city :- "+ this.selectedCity);
  }

  ngOnInit(){
     let city = this.userInfo.getCity();
     console.log("City", city);
  }

}
