import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// Services
import { RequestService } from './services/request.service';

// Tournament Results
import { SparkyAndersonData } from 'models/tournamentResults/sparkyAndersonResults';
import { MemberGuestData } from 'models/tournamentResults/memberGuestResults';
import { ClubChampionshipData } from 'models/tournamentResults/clubChampionshipResults';
import { MemberMemberData } from 'models/tournamentResults/memberMemberResults';

// Import 2019 Photo Modules
import { Member_Guest_Photos } from 'models/photos/photos_member_guest_2019';
import { Member_Member_Photos } from 'models/photos/photos_member_member_2019';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    // NgbModal,
    NgbModule,
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
  providers: [
    ClubChampionshipData,
    MemberGuestData,
    MemberMemberData,
    SparkyAndersonData,
    Member_Guest_Photos,
    Member_Member_Photos,
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
 