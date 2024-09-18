import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { RegistreComponent } from './Component/registre/registre.component';
import { HomeComponent } from './Component/home/home.component';

const routes: Routes = [

  {path: 'login', component:LoginComponent},
  {path: 'home', component:HomeComponent},
  {path: 'register', component:RegistreComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }