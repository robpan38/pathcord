import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { Channel } from 'src/app/shared/interfaces/channel';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss']
})
export class UsersContainerComponent implements OnInit {

  @Input() channels: Channel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
