import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const chatRoute: string = '/chat'

@Component({
  selector: 'app-login-input-container',
  templateUrl: './login-input-container.component.html',
  styleUrls: ['./login-input-container.component.scss']
})
export class LoginInputContainerComponent implements OnInit {

  inputIsValid: boolean = false
  inputValue = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToChat(): void {
    if (this.inputIsValid) {
      this.router.navigateByUrl(chatRoute)
    }
  }

  onInput(): void {
    this.inputIsValid = this.inputValue !== ''
    console.log(this.inputIsValid, this.inputValue)
  }

}
