import { Component,OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit {
  title = 'project3-frontend';

  
  darkMode: any= "false";
  theme = "light mode";

  constructor() {
  
  }
  
  ngOnInit(): void {
   
  }
 

}
