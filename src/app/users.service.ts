import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IUserEntity {
  id: number;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: IUserEntity[] = [];

  constructor() { }

  getAllUsers(): Observable<IUserEntity[]> {
    return of(this.users);
  }
  id = 0;
  createUser(newName: string): Observable<IUserEntity> {
    const newUser: IUserEntity = {id: this.id, username: newName}
    if(this.users.find(u => u.username === newName)) alert("Týpeček už existuje")
    else {
      this.id++;
      this.users.push(newUser);
      return of(newUser);
    }
  }
  findUser(id: number): Observable<IUserEntity> {
    return of(this.users.find(u => u.id === id));
  }
  editUser(id: string, newName:string): Observable<IUserEntity> {
    const idN = parseInt(id, 10);
    const user = this.users.find(u => u.id === idN);
    if(user) {
      user.username = newName;
    }
    return of(user);
  }

}
