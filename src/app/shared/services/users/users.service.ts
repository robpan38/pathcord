import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
} from 'rxjs';

import { User } from '../../interfaces/user';

const BASE_URL = 'https://localhost:7234/api/user'

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
    
    // TODO: Replace with a GET request when possible on BE
    return of<User[]>(debugUsers)
    // return this.http.get<User[]>(this.getUrl());
  }

  public getIdOfUser(username: string): Observable<User> {
    const FIND_BY_NAME_URL = '/byName'

    return this.http.get<User>(this.getUrl() + FIND_BY_NAME_URL + `?userName=${username}`);
  }

  public getUsernameById(userId: number): Observable<string> {
    // let user: User;
    
    // this.getAllUsers().subscribe(
    //   users => user = users.find(user => user.userId === userId)
    // )

    // return of(user.name);
    
    return this.http.get<User>(this.getUrl() + `?userId=${userId}`)
      .pipe(
        map(user => user.name),
        catchError(_ => '')
      );
  }

  private getUrl() {
    return BASE_URL;
  }
}
