import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Page Imports
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SearchComponent } from './pages/queries/search/search.component';
import { ExploreComponent } from './pages/queries/explore/explore.component';
import { TrendingComponent } from './pages/queries/trending/trending.component';
import { VenueDetailComponent } from './results/venue-detail/venue-detail.component';
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'trending', component: TrendingComponent },
  { path: 'venue/:id', component: VenueDetailComponent },
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
