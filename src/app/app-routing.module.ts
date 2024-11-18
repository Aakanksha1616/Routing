import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { BusesSearchComponent } from './buses-search/buses-search.component';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FareDetailsComponent } from './fare-details/fare-details.component';
import { FlightReviewsComponent } from './flight-reviews/flight-reviews.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { BusesListComponent } from './buses-list/buses-list.component';

const routes: Routes = [
  {path:'flights', component:FlightSearchComponent,
    children:[
      {path:'fare-details', component:FareDetailsComponent},
      {path:'flight-reviews', component:FlightReviewsComponent}
    ]
  },
  {path:'buses', component:BusesSearchComponent},
  {path:'buses/bus-list', component:BusesListComponent},
  {path:'hotels', component:HotelSearchComponent},
  {path: 'hotels-list/:city', component:HotelListComponent},
  {path:'', redirectTo:'flights', pathMatch:'full'}, // default route    
  {path:'**', component:PageNotFoundComponent} //wildCart route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
