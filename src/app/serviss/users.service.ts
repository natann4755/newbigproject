import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Usars } from '../moduls/usars';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<Usars>{

  myuser:Usars
  constructor(http:HttpClient) {
    super(http,"users")
   }

   findnamebyid(id:number):string{
    //  console.log("id",id);
     let user = this.data.find(us=>id==us.id)
    //  console.log("user",user);
     return user.name
   }

   findUsernamebyid(id:number):string{
    return this.data.find(us=>us.id==id).username
  }

  findUserid(id:number):any{
    let b=this.data.find(us=>us.id==id)
    return b
  }

  
}
