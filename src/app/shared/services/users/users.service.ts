import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
} from 'rxjs';

import { User } from '../../interfaces/user';

const BASE_URL = 'https://localhost:7234/api/user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private _loggedUserId: BehaviorSubject<number> = new BehaviorSubject(-1);

  get loggedUserId(): number {
    return this._loggedUserId.value;
  }

  set loggedUserId(userId: number) {
    this._loggedUserId.next(userId);
  }

  public getIdOfUser(username: string): Observable<User> {
    const FIND_BY_NAME_URL = '/byName'

    return this.http.get<User>(this.getUrl() + FIND_BY_NAME_URL + `?userName=${username}`);
  }

  public getUsernameById(userId: number): Observable<string> {
    return this.http.get<User>(this.getUrl() + `?userId=${userId}`)
      .pipe(
        map(user => user.name),
        catchError(_ => '')
      );
  }

  public getUsersOfChannel(channelId: number) {
    return this.http.get<User[]>(
      this.getUrl() + '/subscriptions/subscribers' + `?channelId=${channelId}`
    );
  }

  private getUrl() {
    return BASE_URL;
  }
}
