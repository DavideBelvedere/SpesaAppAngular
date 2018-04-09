import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ListComponent } from './Components/list/list.component';
import { RecipeComponent } from './Components/recipe/recipe.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { CustomRouterModule } from './Routing/router.module';
import { HttpService } from './Services/HttpRequest/http.service';
import { LoginService } from './Services/HttpRequest/HttpUtilityService/login.service';
import { HomeComponent } from './Components/home/home.component';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Components/header/header.component';
import { ModalDataService } from './Services/modal.data.service';
import { FormsModule } from '@angular/forms';
import { AuthguardService } from './Routing/Authguard/authguard.service';
import { HomeAuthguardService } from './Routing/Authguard/home-authguard.service';



@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ListComponent,
    HeaderComponent,
    ListComponent,
    RecipeComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,

 
  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CustomRouterModule,
    FormsModule
  ],
  providers: [ModalDataService,HttpService, LoginService,  AuthguardService, HomeAuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
