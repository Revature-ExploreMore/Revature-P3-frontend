import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user-info/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {
  updateUser: User = {
    id: 0,
    name: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
    darkModePreference: false,
    registerDate: new Date,
    roleId: 0
  }

  constructor(private activateRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {

    let bidParam = this.activateRoute.snapshot.paramMap.get('bid');
    console.log(bidParam);

    this.userService.getUser(bidParam).subscribe((response) => {
      this.updateUser = response;
    })

  }

  updateProfileInfo() {
    this.userService.updateUser(this.updateUser).subscribe((response) => {
      this.router.navigate(['profile']);
    })
  }

}
