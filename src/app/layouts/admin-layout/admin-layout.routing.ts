import { Routes } from '@angular/router';

import { EventsComponent } from '../../components/events/events.component';
import { TournamentResultsComponent } from '../../components/tournament-results/tournament-results.component';
import { HandicapsComponent } from '../../components/handicaps/handicaps.component';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { MapsComponent } from '../../maps/maps.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'events',             component: EventsComponent },
    { path: 'tournament-results', component: TournamentResultsComponent },
    { path: 'handicaps',          component: HandicapsComponent },
    { path: 'dashboard',          component: DashboardComponent },
    { path: 'user-profile',       component: UserProfileComponent },
    { path: 'maps',               component: MapsComponent }
];
