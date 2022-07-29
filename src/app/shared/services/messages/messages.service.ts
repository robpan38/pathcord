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

  constructor(private http: HttpClient) { }

  public loadMessages(channelId: number): Observable<Message[]> {
    return of(
      mockMessages.find(channelMessages => channelMessages.channelId === channelId).messages
    );
  }
}
