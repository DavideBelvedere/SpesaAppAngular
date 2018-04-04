import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingEnum } from '../Model/Enum/RoutingEnum';
import { ListComponent } from '../Components/list/list.component';
import { PageNotFoundComponent } from '../Components/page-not-found/page-not-found.component';
import { RecipeComponent } from '../Components/recipe/recipe.component';



const routes: Routes = [
  { path: RoutingEnum.List, component: ListComponent},
  { path: RoutingEnum.Recipe, component: RecipeComponent },
  //{ path: "", redirectTo: "/home", pathMatch: "full" },//all'inizio accederà ad home
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