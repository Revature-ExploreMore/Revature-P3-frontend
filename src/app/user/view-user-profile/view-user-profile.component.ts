import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/user-info/user.service';


@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.css']
})
export class ViewUserComponent implements OnInit {

  currentAllUsers: User[];
  storeMessage: string = "";
  shouldDisplay: boolean = false;
  user: User = { 
              id: 1,
              name: "John",
              email: "Example@nowhere.com",
              phoneNumber: "000-000-0000",                  //delete when backend works
              username: "Example",
              password: "Password",
              darkModePreference: false,
              registerDate: new Date ("6-28-22"),
              roleId: 2
  }


  constructor(private userService: UserService, private router: Router) {
    this.currentAllUsers = [];
  }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.userService.getAllUsers().subscribe(
      {
        next: (response) => {
          console.log(response);
          this.storeMessage = '';
          this.currentAllUsers = response;
        },
        error: (error) => {
          console.log(error.error.errorMessage);
          this.storeMessage = error.error.errorMessage;
        }
      })
  }
  goToEditUser(user: User) {
    this.router.navigate(['profile/edit', user]);
  }

  displayUserForm() {
    if (this.shouldDisplay) {
      this.shouldDisplay = false;
    } else {
      this.shouldDisplay = true;
    }
  }
}

