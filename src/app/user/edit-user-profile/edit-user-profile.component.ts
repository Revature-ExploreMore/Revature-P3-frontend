import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user-info/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'profile/edit',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {
  userData:any=sessionStorage.getItem('user');
  user = JSON.parse(this.userData) as User
  updateUser: User = {
    id: this.user.id,
    name:  this.user.name,
    email: this.user.email,
    phoneNumber: this.user.phoneNumber,
    username: this.user.username,
    password: this.user.password,
    darkModePreference: this.user.darkModePreference,
    registerDate: this.user.registerDate,
    roleId: this.user.roleId
  }

  constructor(private activateRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router) { 
      ;
  
    }

  ngOnInit(): void {
    let user = JSON.parse(this.userData) as User;
    this.userService.getUser(user.id).subscribe((response) => {
      this.updateUser = response;
    })

  }

  updateProfileInfo() {
    let updatedUser = this.userService.updateUser(this.updateUser).subscribe((response) => {
      this.userService.getUser(this.updateUser.id);
      this.user=response;
      sessionStorage.setItem('user', JSON.stringify(this.updateUser));
      this.router.navigate(['profile']);
    })
  }
  goBackToProfile() {
    this.router.navigate(['profile']);
  }
  displayProfile(Id: any){
    this.userService.getUser(this.user.id).subscribe(response=>{
      this.updateUser=response;
    });
  }
  

}
