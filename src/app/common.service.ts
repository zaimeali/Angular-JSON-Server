import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private URL = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  createUser(user){
    return this.http.post(this.URL, user);
  }

  updateUser(){

  }

  getUser(){
    return this.http.get(this.URL);
  }

  deleteUser(){

  }
}
