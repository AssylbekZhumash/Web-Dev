import { Routes } from '@angular/router';
import { HomeComponent } from './components/Home/home.component';
import { AboutComponent } from './components/About/about.component';
import { AlbumsComponent } from './components/Albums/albums.component';
import { AlbumDetailComponent } from './components/AlbumDetail/album-detail.component';
import { AlbumPhotosComponent } from './components/AlbumPhotos/album-photos.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'albums/:id/photos', component: AlbumPhotosComponent },
  { path: '**', redirectTo: 'home' },
];