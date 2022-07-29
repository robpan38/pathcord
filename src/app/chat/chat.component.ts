import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
} from '@angular/core';

import {
  BehaviorSubject,
  Observable,
} from 'rxjs';

import { Channel } from '../shared/interfaces/channel';
import { Message } from '../shared/interfaces/message';
import { User } from '../shared/interfaces/user';
import { ChannelsService } from '../shared/services/channels/channels.service';
import { MessagesService } from '../shared/services/messages/messages.service';
import { UsersService } from '../shared/services/users/users.service';

const baseUrl: string = 'https://swapi.dev/api/people/1'; // 'https://localhost:7234/api/1/channels';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public channels$: Observable<Channel[]>;
  public selectedChannel$: BehaviorSubject<Channel> = new BehaviorSubject(null);
  public selectedChannelMessages$: Observable<Message[]>;
  public selectedChannelUsers$: Observable<User[]>;

  constructor( private http: HttpClient, private channelsService: ChannelsService,
               private messagesService: MessagesService, private usersService: UsersService ) { }

  ngOnInit(): void {
    this.loadChannels();
  }

  protected selectChannel(channel: Channel) {
    console.log('i\'m here :)', channel);
    this.selectedChannel$.next(channel);
    this.loadMessages(channel.channelId);
    this.loadUsers(channel.channelId);
  }

  private loadChannels(): void {
    this.channels$ = this.channelsService.getAllChannels();
  }

  private loadMessages(channelId: number): void {
    this.selectedChannelMessages$ = this.messagesService.loadMessages(channelId);
  }

  private loadUsers(channelId: number): void {
    this.selectedChannelUsers$ = this.usersService.getAllUsers(channelId);
  }

}
