import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
} from '@angular/core';

import { Observable } from 'rxjs';

import { Channel } from '../shared/interfaces/channel';
import { ChannelsService } from '../shared/services/channels/channels.service';

const baseUrl: string = 'https://swapi.dev/api/people/1'; // 'https://localhost:7234/api/1/channels';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  channels$: Observable<Channel[]>;

  constructor( private http: HttpClient, private channelsService: ChannelsService ) { }

  ngOnInit(): void {
    this.loadChannels();
  }

  protected selectChannel(channel: Channel) {
    console.log('i\'m here :)', channel);
  }

  private loadChannels(): void {
    this.channels$ = this.channelsService.getAllChannels();
  }

}
