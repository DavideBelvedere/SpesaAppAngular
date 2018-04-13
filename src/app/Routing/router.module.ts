import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingEnum } from '../Model/Enum/RoutingEnum';
import { ListComponent } from '../Components/list/list.component';
import { PageNotFoundComponent } from '../Components/page-not-found/page-not-found.component';
import { RecipeComponent } from '../Components/recipe/recipe.component';
import { HomeComponent } from '../Components/home/home.component';
import { AuthguardService } from './Authguard/authguard.service';
import { HomeAuthguardService } from './Authguard/home-authguard.service';
import { ProfiloComponent } from '../Components/profilo/profilo.component';



const routes: Routes = [
  { path: RoutingEnum.List, component: ListComponent, canActivate: [AuthguardService] },
  { path: RoutingEnum.Recipe, component: RecipeComponent, canActivate: [AuthguardService] },
  { path: RoutingEnum.Home, component: HomeComponent ,canActivate: [HomeAuthguardService]},
  { path: RoutingEnum.Profilo, component: ProfiloComponent ,canActivate: [AuthguardService]},
  { path: "", redirectTo: "/" + RoutingEnum.Home, pathMatch: "full" },//all'inizio accederà ad home
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomRouterModule { }