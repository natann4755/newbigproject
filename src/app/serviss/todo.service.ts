import { Injectable } from '@angular/core';
import { Todo } from '../moduls/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArrayType } from '@angular/compiler';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends BaseService<Todo>{

  constructor(__Http:HttpClient) {
    super(__Http,"todos") 
  }
}
