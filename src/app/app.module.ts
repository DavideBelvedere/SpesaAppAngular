import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

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
import { ListService } from './Services/HttpRequest/HttpUtilityService/list.service';
import { ListMockService } from './Mock/list-mock.service';
import { AddListMockService } from './Mock/add-list-mock.service';
import { RemoveListMockService } from './Mock/remove-list-mock.service';
import { UpdateListMockService } from './Mock/update-list-mock.service';
import { ModalComponent } from './Components/modal/modal.component';
import { DetailComponent } from './Components/detail/detail.component';
import { SubtitleListComponent } from './Components/subtitle-list/subtitle-list.component';
import { SubtitleUtilitiesService } from './Services/subtitleUtilities.service';
import { AddItemMockService } from './Mock/add-item-mock.service';
import { EditItemMockService } from './Mock/edit-item-mock.service';
import { RemoveItemMockService } from './Mock/remove-item-mock.service';
import { ItemService } from './Services/HttpRequest/HttpUtilityService/item.service';



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
    DetailComponent,
    SubtitleListComponent
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CustomRouterModule,
    FormsModule
  ],
  providers: [ModalDataService,HttpService, LoginService,  AuthguardService, HomeAuthguardService, ListService, ListMockService, AddListMockService, RemoveListMockService, UpdateListMockService,SubtitleUtilitiesService,AddItemMockService,RemoveItemMockService, EditItemMockService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
