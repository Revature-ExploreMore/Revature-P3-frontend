import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project3-frontend';

  toggleTheme (): void {
    document.body.classList.toggle("bg-dark");
    document.querySelector("h4.h1")?.classList.toggle("text-white");
    document.querySelector("h1")?.classList.toggle("text-white");
    document.querySelector("div.mt-5.p-4.text-white.text-center")?. 
      classList.remove("bg-dark");
    document.querySelector("div.mt-5.p-4.text-white.text-center")?.
      classList.toggle("bg-secondary");

    // For the explore more section -- only works when screen size reduces
    document.querySelectorAll("body p").forEach(
      (elem) => elem.classList.toggle("text-white")
    );
    document.querySelectorAll("body u").forEach(
      (elem) => elem.classList.toggle("text-white")
    );
    // end of exploremore section
    document.querySelectorAll("div.card").forEach(
      (elem) => elem.classList.toggle("bg-secondary")
    );
    document.querySelectorAll("h5.card-title").forEach(
      (elem) => elem.classList.toggle("text-white")
    );
    document.querySelectorAll("label").forEach(
      (elem) => elem.classList.toggle("text-white")
    );
  }
}
