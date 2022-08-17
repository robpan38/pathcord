import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  Observable,
  tap,
} from 'rxjs';

import { Message } from '../../interfaces/message';
import { BASE_URL } from '../service-constants';
import { UsersService } from '../users/users.service';
import { mockMessages } from './mockMessages';

const BASE_ROUTE = "/channel/messages"

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private myMockMessages = mockMessages;

  constructor(private http: HttpClient, private usersService: UsersService) { }

  public loadMessages(channelId: number): Observable<Message[]> {
    return this.http.get<Message[]>(BASE_URL + BASE_ROUTE + `?channelId=${channelId}`);
  }

  public addMessage(message: Message): void {
    const POST_ROUTE = BASE_URL + BASE_ROUTE + `?channelId=${message.channelId}&userId=${message.userId}`;

    console.log(POST_ROUTE)
    console.log(message)

    this.http.post(POST_ROUTE,
        { "text": message.text },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }}
      )
      .pipe(tap(response => console.log(response)))
      .subscribe({
        next: e => console.log(e),
        error: e => console.log('error', e)
      });

    // console.log(this.myMockMessages);
    // this.myMockMessages = this.myMockMessages.map(
    //   channelMessages => {
    //     if (message.channelId === channelMessages.channelId) {
    //       return { channelId: channelMessages.channelId, messages: [...channelMessages.messages as Message[], message] };
    //     } else {
    //       return channelMessages;
    //     }
    //   }
    // )
    // console.log(this.myMockMessages);
  }
}
