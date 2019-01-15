import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { TournamentScheduleComponent } from '../../components/tournament-schedule/tournament-schedule.component';
import { EventsComponent } from '../../components/events/events.component';
import { TournamentResultsComponent } from '../../components/tournament-results/tournament-results.component';
import { HandicapsComponent } from '../../components/handicaps/handicaps.component';

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
    MatTooltipModule
  ],
  declarations: [
    EventsComponent,
    TournamentResultsComponent,
    TournamentScheduleComponent,
    HandicapsComponent,
    DashboardComponent,
    UserProfileComponent,
    MapsComponent
  ]
})

export class AdminLayoutModule {}
