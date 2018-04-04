import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ListComponent } from './Components/list/list.component';
import { RecipeComponent } from './Components/recipe/recipe.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { CustomRouterModule } from './Routing/router.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    RecipeComponent,
    FooterComponent,
    PageNotFoundComponent,
  
  ],
  imports: [
    BrowserModule,
    CustomRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
