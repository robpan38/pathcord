import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { Channel } from 'src/app/shared/interfaces/channel';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {
  @Input() channels: Channel[] = [];
  @Output() onChannelSelected = new EventEmitter<Channel>();

  constructor() { }

  ngOnInit(): void {
  }

  protected selectChannel(channel: Channel) {
    this.onChannelSelected.emit(channel);
  }

}