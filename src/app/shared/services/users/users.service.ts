import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  Observable,
  of,
} from 'rxjs';

import { User } from '../../interfaces/user';

const BASE_URL = 'https://localhost:7234/api/1/users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  // TODO: make a more realistic mock of the users data
  private _loggedUserId: BehaviorSubject<number> = new BehaviorSubject(-1);

  get loggedUserId(): number {
    return this._loggedUserId.value;
  }

  set loggedUserId(userId: number) {
    this._loggedUserId.next(userId);
  }

  public getAllUsers() {
    const debugUsers: User[] = [{
        userId: 1,
        name: 'Vali Vijelieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
      }, {
        userId: 2,
        name: 'Mohnea'
      }, {
        userId: 3,
        name: 'Robrob'
      }, {
        userId: 4,
        name: 'Dominiq'
      }, {
        userId: 5,
        name: 'Random-user123'
      }
    ]
    
    return of<User[]>(debugUsers)
    // return this.http.get<User[]>(this.getUrl());
  }

  public getIdOfUser(username: string): Observable<number> {
    let id;

    this.getAllUsers().subscribe(
      users => {
        let user = users.find(user => user.name === username);
        
        if (user) {
          id = user.userId;
        } else {
          id = -1;
        }
      }
    )

    return of<number>(id);
  }

  public getUsernameById(userId: number): Observable<string> {
    let user: User;
    
    this.getAllUsers().subscribe(
      users => user = users.find(user => user.userId === userId)
    )

    return of(user.name);
  }

  private getUrl() {
    return BASE_URL;
  }
}
