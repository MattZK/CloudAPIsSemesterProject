import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SearchComponent } from './pages/queries/search/search.component';
import { ExploreComponent } from './pages/queries/explore/explore.component';
import { TrendingComponent } from './pages/queries/trending/trending.component';
import { HttpClientModule } from '@angular/common/http';
import { VenueListComponent } from './results/venue-list/venue-list.component';
import { VenueDetailComponent } from './results/venue-detail/venue-detail.component';
import { FormsModule }   from '@angular/forms';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthService } from './services/auth.service';
import { AuthGaurd } from './guards/auth.guard';
import { FavoritesComponent } from './pages/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SettingsComponent,
    SearchComponent,
    ExploreComponent,
    TrendingComponent,
    VenueListComponent,
    VenueDetailComponent,
    AuthComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
