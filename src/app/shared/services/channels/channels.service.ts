import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Channel } from '../../interfaces/channel';
import { BASE_URL } from '../service-constants';

const BASE_ROUTE = "/channel"
const CREATE_CHANNEL_ROUTE = "/create"
const DELETE_CHANNEL_ROUTE = "/delete"

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

  public createChannel(channelName: string): Observable<Channel> {
    return this.http.post<Channel>(this.getUrl() + CREATE_CHANNEL_ROUTE, {
      name: channelName
    })
  }

  public deleteChannel(channelId: number): Observable<Channel> {
    return this.http.delete<Channel>(this.getUrl() + DELETE_CHANNEL_ROUTE + `?channelId=${channelId}`);
  }

  private getUrl() {
    return BASE_URL + BASE_ROUTE;
  }
}
