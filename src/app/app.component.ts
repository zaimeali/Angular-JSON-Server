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

  getLatestUser(){
    this.commonService.getUser().subscribe((data) => {
      this.users = data;
    });
  }
}
