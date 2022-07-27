import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

const chatRoute: string = "/chat";
@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  inputValue: string = "";
  inputIsValid: boolean = false;
  
  validateInput(value: any): void {
    this.inputIsValid = value !== '';
  }

  goToChat(): void {
    if (this.inputIsValid) {
      this.router.navigateByUrl(chatRoute);
    }
  }
}
