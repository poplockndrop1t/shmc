import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MapsComponent } from './maps/maps.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { SparkyAndersonData } from 'models/tournamentResults/sparkyAndersonResults';
import { Handicaps } from 'models/handicaps/handicaps_6_15_2019';

// Import 2019 Photo Modules
import { Member_Guest_Photos } from 'models/photos/photos_member_guest_2019';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  providers: [ SparkyAndersonData, Handicaps, Member_Guest_Photos ],
  bootstrap: [AppComponent]
})
export class AppModule {}
 