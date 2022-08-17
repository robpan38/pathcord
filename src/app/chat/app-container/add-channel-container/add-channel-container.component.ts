import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-channel-container',
  templateUrl: './add-channel-container.component.html',
  styleUrls: ['./add-channel-container.component.scss']
})
export class AddChannelContainerComponent implements OnInit {
  @Output() onAddNewChannel = new EventEmitter<string>();

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  addChannelForm = this.fb.group({
    channelName: ['', Validators.required]
  })

  public handleAddNewChannel(channelName: string): void {
    this.addChannelForm.setValue({ channelName: '' });
    this.onAddNewChannel.emit(channelName);
  }
}
