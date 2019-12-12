import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  islog:boolean= false

  constructor(private rout:Router) {

    this.rout.events.subscribe(rouevent=>{

        if(rouevent instanceof NavigationEnd){

          if (this.islog==false){
            this.rout.navigateByUrl("/login")
          }
        }
    }
    )
   }
}
