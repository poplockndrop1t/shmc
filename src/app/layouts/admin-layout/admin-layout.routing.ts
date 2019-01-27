import { Routes } from '@angular/router';

import { PhotosComponent } from '../../components/photos/photos.component';
import { TournamentScheduleComponent } from '../../components/tournament-schedule/tournament-schedule.component';
import { TournamentResultsComponent } from '../../components/tournament-results/tournament-results.component';
import { HandicapsComponent } from '../../components/handicaps/handicaps.component';
import { SuperReportComponent } from '../../components/super-report/super-report.component';
import { UpcomingEventComponent } from '../../components/upcoming-event/upcoming-event.component';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { MapsComponent } from '../../maps/maps.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'photos',              component: PhotosComponent },
    { path: 'tournament-results',  component: TournamentResultsComponent },
    { path: 'tournament-schedule', component: TournamentScheduleComponent },
    { path: 'upcoming-event',      component: UpcomingEventComponent },
    { path: 'handicaps',           component: HandicapsComponent },
    { path: 'super-report',        component: SuperReportComponent },
    { path: 'dashboard',           component: DashboardComponent },
    { path: 'user-profile',        component: UserProfileComponent },
    { path: 'maps',                component: MapsComponent }
];
