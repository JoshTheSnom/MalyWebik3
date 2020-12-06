import { Component, OnInit } from '@angular/core';
import { IUserEntity, UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(private readonly  usersService: UsersService,private readonly activatedRoute: ActivatedRoute,private readonly router: Router) { }
  user: IUserEntity;

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe(
        p => {
          const id = p.get('id');
          const idN = parseInt(id, 10);
          this.usersService.findUser(idN).subscribe(
            u => this.user = u,
            e => console.error(e));
        }
      );
  }

  username = '';
  id = '';

    submit(id: string, username:string){
      this.usersService.editUser(this.id, this.username);
      this.router.navigateByUrl(`/users`);
    }

}
