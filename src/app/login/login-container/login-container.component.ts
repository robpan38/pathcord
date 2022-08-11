import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from 'src/app/shared/services/users/users.service';

const chatRoute: string = "/chat";
@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {
  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {
  }
  
  inputValue: string = "";
  inputIsValid: boolean = false;
  
  validateInput(value: any): void {
    this.inputIsValid = value !== '';
  }

  goToChat(formValue: string): void {
    if (!this.inputIsValid) {
      return;
    }
    
    let userId = this.usersService.getIdOfUser(formValue);
    userId.subscribe(id => {
      if (id !== -1) {
        this.usersService.loggedUserId = id;

        this.router.navigateByUrl(chatRoute);
      } else {
        // TODO: handle user not found
      }
    })
  }
}
