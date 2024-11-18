import { Component } from '@angular/core';
import { filter, map, Observable, take } from 'rxjs'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routings';

  ngOnInit(){
    
  //   console.log("Task 1")
  //   var obs = new Observable((observer)=>{
  //      //Perform asynchronus operati

  //      setTimeout(() => {
  //       observer.next(100);
  //       observer.complete();
  //      },2000);
  //   })

  //   obs.subscribe({

  //     next:(data:any)=>{
  //       //
  //       var result = data + 10;
  //       console.log(result);
  //     },

  //     error:()=>{

  //     },

  //     complete:()=>{
  //        console.log("Async Opertion completed");
  //     }
  
  //   })

  //   console.log("Task 2");
  // }

  // console.log("Task 1")
  // var obs = new Observable((observer)=>{

  //   setTimeout(() => {
  //     console.log("observables are executed"); // they are not execute bcz they are lazy
  //   },2000);
  // })

  // obs.subscribe({
  //   next:()=>{

  //   } //observables are executed //jab tak subscribe nh krty tab tak call nh hoga.
  // })


  //------------------Rxjs Operator-----------------------------------

  var obs = new Observable((observer)=>{
    //performing asynchronus operation
     observer.next(10);
     observer.next(20);
     observer.next(30);
     observer.next(40);
  }).pipe(filter ((result:any)=>result > 20),map((result:any)=> result* 10), take(1)) // 300 400
  

  obs.subscribe({
    next:(response:any)=>{
       console.log(response);
    },
    error:()=>{
      
    },
    complete:()=>{
      
    }
  })
    
  

}

 
}
