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

const chatRoute: string = '/chat'

@Component({
  selector: 'app-login-input-container',
  templateUrl: './login-input-container.component.html',
  styleUrls: ['./login-input-container.component.scss']
})
export class LoginInputContainerComponent {
  @Input() inputValue: String = '';
  @Input() inputIsValid: boolean = false;
  @Output() onInputEvent = new EventEmitter();
  @Output() onClickEvent = new EventEmitter();

  loginForm = this.fb.group({
    username: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }
}
