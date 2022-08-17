import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';

import {
  Observable,
  of,
} from 'rxjs';
import { Channel } from 'src/app/shared/interfaces/channel';
import { Message } from 'src/app/shared/interfaces/message';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss'],
})
export class ChatContainerComponent {
  @Input() selectedChannel: Channel;
  @Input() currentUserId: number = 1;
  @Input() currentChatId: number = 1;
  @Input() messages: Message[] = [];
  @Output() messageSent = new EventEmitter();

  constructor(
    private fb: FormBuilder, 
    private usersService: UsersService,
  ) { }

  messageForm = this.fb.group({
    message: ['', Validators.required]
  });

  handleSendMessage(): void {
    this.messageSent.emit({
      userId: this.currentUserId,
      channelId: this.currentChatId,
      text: this.messageForm.value?.message
    })
    this.messageForm.setValue({ message: '' });
  }

  public getUsernameById(userId: number): Observable<string> {
    return of('Lmao');
    // return this.usersService.getUsernameById(userId);
  }
}
