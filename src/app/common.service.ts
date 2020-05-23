import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private URL = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  createUser(user){
    return this.http.post(this.URL, user);
  }

  updateUser(user){
    return this.http.put(this.URL + "/" + user.id, user);
  }

  getUser(){
    return this.http.get(this.URL);
  }

  deleteUser(id: number){
    return this.http.delete(this.URL + '/' + id);
  }
}
