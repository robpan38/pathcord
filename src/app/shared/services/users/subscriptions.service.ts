import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BASE_URL } from '../service-constants';

const SUBS_URL = "/user/subscriptions";
const SUBSCRIBE_URL = "/subscribe";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  constructor(private http: HttpClient) { }

  public subscribeToChannel(userId: number, channelId: number) {
    return this.http.post(this.getUrl() + SUBSCRIBE_URL + `?userId=${userId}&channelId=${channelId}`, {});
  }

  private getUrl() {
    return BASE_URL + SUBS_URL;
  }
}
