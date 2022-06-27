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
  goToEditUser(id: number) {
    this.router.navigate(['edit-user-profile', id]);
  }

  displayUserForm() {
    if (this.shouldDisplay) {
      this.shouldDisplay = false;
    } else {
      this.shouldDisplay = true;
    }
  }
}

