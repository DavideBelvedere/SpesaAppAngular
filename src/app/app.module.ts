import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ListComponent } from './list/list.component';
import { ModalDataService } from './modal/modal.data.service';
import { ListService } from './list.service';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ModalDataService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
