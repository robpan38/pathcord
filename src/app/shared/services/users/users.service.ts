import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';

import { User } from '../../interfaces/user';

const BASE_URL = 'https://localhost:7234/api/1/users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getAllUsers(channelId: number) {
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

  private getUrl() {
    return BASE_URL;
  }
}
