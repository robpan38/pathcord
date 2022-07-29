import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { Message } from 'src/app/shared/interfaces/message';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss']
})
export class ChatContainerComponent implements OnInit {
  @Input() currentUserId: number = 1;
  @Input() messages: Message[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
