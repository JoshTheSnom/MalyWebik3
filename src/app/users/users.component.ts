import { Component, OnInit } from '@angular/core';
import { IUserEntity, UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: IUserEntity[] = [];
  constructor(
    private readonly usersService: UsersService
  ) {
    usersService.getAllUsers()
      .subscribe(
        u => this.users = u,
        e => console.error(e)
      );
   }

  ngOnInit(): void {
  }

}
