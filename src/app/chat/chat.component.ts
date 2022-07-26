import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
} from '@angular/core';

const baseUrl: string = 'https://localhost:7234/api/1/channels';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get(baseUrl)
      .subscribe(
        (result) => console.log(result)
      )
  }

}
