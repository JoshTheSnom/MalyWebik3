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
    if(this.users.find(user => user.username === newName)) alert("Týpeček už existuje")
    else {
      this.id++;
      this.users.push(newUser);
      return of(newUser);
    }
  }
  findUser(id: number): Observable<IUserEntity> {
    return of(this.users.find(u => u.id === id));
  }
}
