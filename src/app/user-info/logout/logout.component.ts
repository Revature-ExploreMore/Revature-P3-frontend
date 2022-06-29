import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {

    this.authService.removeUserDetails();
    this.authService.isLoggedIn=false;
    this.authService.isAdmin=false;
    this.authService.isUser=false;
    this.router.navigate(['login']);
  }

}
