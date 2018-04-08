import { Component, ViewChild } from '@angular/core';
import { LoginService } from './Services/HttpRequest/HttpUtilityService/login.service';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHeader:boolean=true;
  title = 'app';
 
}
