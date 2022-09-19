import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserHelpComponent } from './user-help/user-help.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "home/:empId", component: HomeComponent},
  {path: "home/:empId/:empName", component: HomeComponent},
  {path: "help", component: UserHelpComponent},
  {path: "about", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
