import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { Channel } from 'src/app/shared/interfaces/channel';

@Component({
  selector: 'app-channels-container',
  templateUrl: './channels-container.component.html',
  styleUrls: ['./channels-container.component.scss']
})
export class ChannelsContainerComponent implements OnInit {
  @Input() currentUserId: number = -1;
  @Input() channels: Channel[] = [];
  @Output() onChannelSelected = new EventEmitter<Channel>();
  @Output() onAddChannel = new EventEmitter<Channel>();

  constructor() { }

  ngOnInit(): void {
  }

  protected selectChannel(channel: Channel) {
    this.onChannelSelected.emit(channel);
  }

  protected addChannel() {
    this.onAddChannel.emit();
  }

}
