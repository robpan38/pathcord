import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { Channel } from 'src/app/shared/interfaces/channel';
import { Message } from 'src/app/shared/interfaces/message';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {
  @Input() selectedChannel: Channel;
  @Input() channels: Channel[] = [];
  @Input() messages: Message[] = [];
  @Input() currentUserId = 1;
  @Input() currentChatId = 1;
  @Input() users: User[] = [];
  @Input() showAddChannelScreen = false;
  @Output() onChannelSelected = new EventEmitter<Channel>();
  @Output() messageSent = new EventEmitter<Message>();
  @Output() onAddChannel = new EventEmitter<Channel>();
  @Output() onAddNewChannel = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public handleAddNewChannel(channelName: string): void {
    this.onAddNewChannel.emit(channelName);
  }

  protected addChannel() {
    this.onAddChannel.emit();
  }

  protected selectChannel(channel: Channel) {
    this.onChannelSelected.emit(channel);
  }

  protected handleMessageSent(message: Message) {
    this.messageSent.emit(message);
  }

}
