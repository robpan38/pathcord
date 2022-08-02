import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  Observable,
  of,
} from 'rxjs';

import { Message } from '../../interfaces/message';
import { mockMessages } from './mockMessages';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private myMockMessages = mockMessages;

  constructor(private http: HttpClient) { }

  public loadMessages(channelId: number): Observable<Message[]> {
    return of(
      this.myMockMessages.find(channelMessages => channelMessages.channelId === channelId).messages
    );
  }

  public addMessage(message: Message): void {
    console.log(this.myMockMessages);
    this.myMockMessages = this.myMockMessages.map(
      channelMessages => {
        if (message.receiverId === channelMessages.channelId) {
          return { channelId: channelMessages.channelId, messages: [...channelMessages.messages as Message[], message] };
        } else {
          return channelMessages;
        }
      }
    )
    console.log(this.myMockMessages);
  }
}
