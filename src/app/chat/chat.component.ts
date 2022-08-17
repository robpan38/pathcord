import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
} from '@angular/core';

import {
  BehaviorSubject,
  map,
  Observable,
  tap,
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
  public currentUserId: number = -1;
  public channels$: Observable<Channel[]>;
  public selectedChannel$: BehaviorSubject<Channel> = new BehaviorSubject(null);
  public selectedChannelMessages$: Observable<Message[]>;
  public selectedChannelUsers$: Observable<User[]>;

  constructor( private http: HttpClient, private channelsService: ChannelsService,
               private messagesService: MessagesService, private usersService: UsersService ) { }

  ngOnInit(): void {
    this.loadChannels();

    // TODO: link the logged user to his user id
    this.channels$.subscribe(
      channels => {
        this.selectedChannel$.next(channels[0]);
        this.loadMessages(this.selectedChannel$.value.channelId);
        this.loadUsers(this.selectedChannel$.value.channelId);
      }
    );

    this.currentUserId = this.getCurrentUserId();
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
    this.selectedChannelMessages$ = this.messagesService
      .loadMessages(channelId)
      .pipe(
        map(messages => {
            // Get all user IDs from all messages, put them in a set and
            // request only those IDs
            const userIdSet: Set<number> = messages
              .map(message => message.userId)
              .reduce((userIdSet: Set<number>, userId: number) => {
                return userIdSet.add(userId)
              }, new Set<number>()
            )

            // Go through each element in the set and create a request for it
            userIdSet.forEach(
              (id) => this.usersService.getUsernameById(id).subscribe(
                name => {
                  // Go through all messages and set the usernames for the
                  // ones with the newly received ID
                  messages.forEach(
                    (message, index) => {
                      if (message.userId !== id) {
                        return;
                      }

                      messages[index].username = name;
                    }
                  )
                }
              )
            )

            return messages
        }),
        tap(res => console.log('loading messages...', res))
      );
  }

  private loadUsers(channelId: number): void {
    this.selectedChannelUsers$ = this.usersService.getUsersOfChannel(channelId);
  }

  private getCurrentUserId(): number {
    return this.usersService.loggedUserId;
  }

  public handleMessageSent(message: Message):void {
    this.messagesService.addMessage(message);
    this.loadMessages(this.selectedChannel$.value.channelId);
  }
}
