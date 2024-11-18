import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { BusesSearchComponent } from './buses-search/buses-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FareDetailsComponent } from './fare-details/fare-details.component';
import { FlightReviewsComponent } from './flight-reviews/flight-reviews.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusesListComponent } from './buses-list/buses-list.component';
import { UserService } from './Services/User.service';
import { AuthenticationService } from './Services/Authentication.Service';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    HotelSearchComponent,
    BusesSearchComponent,
    PageNotFoundComponent,
    FareDetailsComponent,
    FlightReviewsComponent,
    HotelListComponent,
    BusesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
