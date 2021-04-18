import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { CookieService } from 'ngx-cookie-service';
import { BandDetailComponent } from './band-detail/band-detail.component';
import { ErrorComponent } from './error/error.component';
import { AlbumsReviewsComponent } from './albums-reviews/albums-reviews.component';
import { RatingModule } from 'ng-starrating';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    BandDetailComponent,
    ErrorComponent,
    AlbumsReviewsComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RatingModule,
    CKEditorModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
