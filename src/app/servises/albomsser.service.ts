import { Injectable } from '@angular/core';
import { BaseService } from '../serviss/base.service';
import { Alboms } from '../moduls/alboms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlbomsserService extends BaseService<Alboms> {

  constructor(http:HttpClient) {
    super(http,"albums")
   }
}
