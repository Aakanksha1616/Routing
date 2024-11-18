import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buses-list',
  templateUrl: './buses-list.component.html',
  styleUrls: ['./buses-list.component.css']
})
export class BusesListComponent {
 source:string | null= null;

 destination:string | null =null;

 constructor(private activatedRoute: ActivatedRoute){
   this.source =  this.activatedRoute.snapshot.queryParamMap.get('from');
   this.destination = this.activatedRoute.snapshot.queryParamMap.get('to');
  
  
 }
}
