import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss']
})
export class UsersContainerComponent implements OnInit {
  @Input() users: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
