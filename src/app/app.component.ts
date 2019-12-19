import { Component } from '@angular/core';
import { LoginService } from './serviss/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datal';

  constructor(private svslog:LoginService){
    
  }

}
