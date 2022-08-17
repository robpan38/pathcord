import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Channel } from '../../interfaces/channel';
import { BASE_URL } from '../service-constants';

const BASE_ROUTE = "/channel"

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  constructor(private http: HttpClient) { }

  public getAllChannels() {
    return this.http.get<Channel[]>(this.getUrl() + '/getAll');
  }

  public getAllChannelsOfUser(userId: number) {
    return this.http.get<Channel[]>(
      BASE_URL + '/user/subscriptions/getAll',
      {
        params: {
          userId: userId
        }
      }
    );
  }

  private getUrl() {
    return BASE_URL + BASE_ROUTE;
  }
}
