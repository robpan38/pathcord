import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderContainerComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  protected goToLogin() {
    this.router.navigate(['/login']);
  }
}
