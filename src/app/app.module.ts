import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShowsComponent } from './shows/shows.component';
import { DetailedComponent } from './detailed/detailed.component';
import { AuthComponent } from './auth/auth.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ShowsComponent,
    DetailedComponent,
    AuthComponent,
    AddComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
