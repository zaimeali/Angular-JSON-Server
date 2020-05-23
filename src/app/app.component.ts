import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-json-app';

  users: Object;

  userObj = {
    name: '',
    mobile: '',
    email: '',
    password: '',
    id: ''
  };

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getLatestUser();
  }

  addUser(form: NgForm){
    console.log(form);
    this.commonService.createUser(form).subscribe((res) => {
      console.log("User Added");
    });
    this.getLatestUser();
  }

  updateUser(){
    this.commonService.updateUser(this.userObj).subscribe((res) => {
      console.log("User Updated");
      this.getLatestUser();
    });
  }

  getLatestUser(){
    this.commonService.getUser().subscribe((data) => {
      this.users = data;
    });
  }

  deleteUser(id: number){
    this.commonService.deleteUser(id).subscribe((res) => {
      console.log("Deleted");
      this.getLatestUser();
    });
  }

  editUser(user){
    this.userObj = user;
  }

  clear(){
    this.userObj = {
      name: '',
      mobile: '',
      email: '',
      password: '',
      id: ''
    };
  }
}
