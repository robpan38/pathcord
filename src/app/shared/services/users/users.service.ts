import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  catchError,
  map,
  Observable,
} from 'rxjs';

import { User } from '../../interfaces/user';
import { LocalService } from '../local.service';

const BASE_URL = 'https://localhost:7234/api/user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private local: LocalService) { }

  get loggedUserId(): number {
    let maybeUserId = this.local.getData('userId');
    if (maybeUserId) {
      return Number.parseInt(maybeUserId);
    }
    return -1;
  }

  set loggedUserId(userId: number) {
    this.local.setData('userId', userId.toString());
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
