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

import { Message } from 'src/app/shared/interfaces/message';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss']
})
export class ChatContainerComponent {
  @Input() currentUserId: number = 1;
  @Input() currentChatId: number = 1;
  @Input() messages: Message[] = [];
  @Output() messageSent = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  messageForm = this.fb.group({
    message: ['', Validators.required]
  });

  handleSendMessage(): void {
    this.messageSent.emit({
      senderId: this.currentUserId,
      receiverId: this.currentChatId,
      content: this.messageForm.value?.message
    })
    this.messageForm.setValue({ message: '' });
  }
}
