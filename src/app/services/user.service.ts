import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class UserService {
  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor() {
  }

}
