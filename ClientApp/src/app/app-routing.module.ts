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
import { FavoritesEditComponent } from './pages/favorites/favorites-edit/favorites-edit.component';
import { VenueAddFavoritesComponent } from './results/venue-add-favorites/venue-add-favorites.component';

const routes: Routes = [
  // Main Pages
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'trending', component: TrendingComponent },
  { path: 'settings', component: SettingsComponent },
  // Favorites
  { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGaurd] },
  { path: 'favorites/edit', component: FavoritesEditComponent, canActivate: [AuthGaurd] },
  { path: 'favorites/edit/:id', component: FavoritesEditComponent, canActivate: [AuthGaurd] },
  { path: 'favorites/:id', component: FavoritesDetailComponent, canActivate: [AuthGaurd] },
  // Venue Related
  { path: 'venue/:id', component: VenueDetailComponent },
  { path: 'venue/:id/save', component: VenueAddFavoritesComponent, canActivate: [AuthGaurd] },
  // Authentication
  { path: 'auth', component: AuthComponent },
  // Not Found Redirect
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
