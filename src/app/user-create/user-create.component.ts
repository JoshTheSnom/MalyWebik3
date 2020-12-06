import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  constructor(private readonly usersService: UsersService,private readonly router: Router) { }

  ngOnInit(): void {
  }

  username = '';

  submit(username:string){
    this.usersService.createUser(this.username)
    .subscribe(user => this.router.navigateByUrl(`/user/${user.id}`));
  }

}
