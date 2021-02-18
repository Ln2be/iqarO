import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SearchComponent } from './search/search.component';
import { ShowsComponent } from './shows/shows.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'', redirectTo:'/mwelcome', pathMatch:'full'},
  {path:'mwelcome', component:WelcomeComponent},
  {path:'madd', component:WelcomeComponent},
  {path:'mposts', component:ShowsComponent},
  {path:'msearch', component:SearchComponent},
  {path:'mauth', component:AuthComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
