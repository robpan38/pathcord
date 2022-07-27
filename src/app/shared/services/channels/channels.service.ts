import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Channel } from '../../interfaces/channel';

const BASE_URL = 'https://localhost:7234/api/1/channels'

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  constructor(private http: HttpClient) { }

  public getAllChannels() {
    const debugChannels: Channel[] = [{
        channelId: 1,
        name: 'general'
      }, {
        channelId: 2,
        name: 'party'
      }, {
        channelId: 3,
        name: 'chill'
      }, {
        channelId: 4,
        name: 'bots'
      }
    ]
    
    // return of<Channel[]>(debugChannels)
    return this.http.get<Channel[]>(this.getUrl());
  }

  private getUrl() {
    return BASE_URL;
  }
}
