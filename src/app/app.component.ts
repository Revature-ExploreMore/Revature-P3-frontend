import { Component } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'project3-frontend';
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  constructor(private darkModeService: DarkModeService) {}

  onToggle(): void {
    this.darkModeService.toggle();
  }
}
