import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-buses-search',
  templateUrl: './buses-search.component.html',
  styleUrls: ['./buses-search.component.css']
})
export class BusesSearchComponent {
  
 busSearchForm!: FormGroup;
  constructor(private fb:FormBuilder , private router:Router) {
    }
  

  ngOnInit(){
    this.busSearchForm = this.fb.group({
      from:['',[Validators.required]],
      to:['', [Validators.required]],
    })
  
  }

  searchBus(){
    if(this.busSearchForm.valid){
      var fromLocation = this.busSearchForm.get('from')?.value;
      var toLocation = this.busSearchForm.get('to')?.value;
      this.router.navigate(['/buses/bus-list'],{queryParams:{'from':fromLocation , 'to':toLocation}});
      
    }
  }

}


