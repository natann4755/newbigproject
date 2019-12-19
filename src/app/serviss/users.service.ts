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

   findnamebyid(id:number): string{
   
    // let use:string
    //    this.data.subscribe(ss=> {
    //      use= ss.find(us=>id==us.id).name})
    
     return this.data.value.find(us=>id==us.id).name
   }

   findUsernamebyid(id:number): string{
    // let usid:string
    // this.data.subscribe(ee => {usid= ee.find(us=>us.id==id).username })
    // return usid
    return this.data.value.find(us=>us.id==id).username
  }

  findUserid(id:number): any{
    // let uesid:{}
    // this.data.subscribe(a => {uesid= a.find(us=>us.id==id)}) 
    // return uesid
    return this.data.value.find(us=>us.id==id)
  }

  
}
