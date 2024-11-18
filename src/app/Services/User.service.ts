import { inject, Injectable } from "@angular/core";
import { AuthenticationService } from "./Authentication.Service";

@Injectable()
export class UserService{
    

    // isAuthenticatedUser: boolean;
    // constructor(isUserLoggedIn:boolean){
    //   this.isAuthenticatedUser=isUserLoggedIn;
    // }


    constructor(private authService:AuthenticationService) {
        
    }


    getUserInfo() {  

        if (this.authService.isAuthenticated()) {  //authService  isAuthenticated() hai to muze only this userInforamtion ko fetch krna hai.
            let obj = {
                name: "David",
                emailId: "david@gmail.com",
                mobNo: 9898626548,
                city: "Pune"
            }
            return obj; // return value of the data property

        } else {
            return null;
        }


    }
}