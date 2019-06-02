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
import { AuthGaurd } from './guards/auth.guard';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { FavoritesDetailComponent } from './pages/favorites/favorites-detail/favorites-detail.component';

const routes: Routes = [
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGaurd] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGaurd] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGaurd] },
  { path: 'explore', component: ExploreComponent, canActivate: [AuthGaurd] },
  { path: 'trending', component: TrendingComponent, canActivate: [AuthGaurd] },
  { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGaurd] },
  { path: 'favorites/:id', component: FavoritesDetailComponent, canActivate: [AuthGaurd] },
  { path: 'venue/:id', component: VenueDetailComponent, canActivate: [AuthGaurd] },
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
