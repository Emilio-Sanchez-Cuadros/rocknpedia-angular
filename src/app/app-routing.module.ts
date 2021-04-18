import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsReviewsComponent } from './albums-reviews/albums-reviews.component';
import { BandDetailComponent } from './band-detail/band-detail.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  { 
    path: 'users', component: UsersComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  { 
    path: 'register', component: RegisterComponent
  },
  { 
    path: 'band-detail/:band_id', component: BandDetailComponent
  },
  { 
    path: 'reviews/:album_id', component: AlbumsReviewsComponent
  },
  {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
