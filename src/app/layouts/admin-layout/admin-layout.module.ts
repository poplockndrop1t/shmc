import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { TournamentResultsComponent } from '../../components/tournament-results/tournament-results.component';
import { TournamentScheduleComponent } from '../../components/tournament-schedule/tournament-schedule.component';
import { UpcomingTournamentComponent } from '../../components/upcoming-tournament/upcoming-tournament.component';

import { HandicapsComponent } from '../../components/handicaps/handicaps.component';
import { PhotosComponent } from '../../components/photos/photos.component';
import { SuperReportComponent } from '../../components/super-report/super-report.component';
import { NewRulesComponent } from '../../components/new-rules/new-rules.component';
import { MinutesComponent } from '../../components/minutes/minutes.component';
import { EmailComponent } from '../../components/email/email.component';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { MapsComponent } from '../../maps/maps.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],
  declarations: [
    PhotosComponent,
    TournamentResultsComponent,
    TournamentScheduleComponent,
    UpcomingTournamentComponent,
    HandicapsComponent,
    NewRulesComponent,
    SuperReportComponent,
    DashboardComponent,
    UserProfileComponent,
    MinutesComponent,
    EmailComponent,
    MapsComponent
  ]
})

export class AdminLayoutModule {}
