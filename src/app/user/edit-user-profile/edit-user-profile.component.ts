import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {
  editUser: User = {
  name: '',
  email: '',
  phoneNumber: 0,
   

  }

  constructor(
    private activateRoute: ActivatedRoute,
            //   private userHttpService: UserHttpService,
              private router: Router
              ) { }

  ngOnInit(): void {

  let bidParam = this.activateRoute.snapshot.paramMap.get('bid');
  console.log(bidParam);
  }

}
