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


  constructor(private commonService: CommonService) { }

  addUser(form: NgForm){
    console.log(form);
  }
}
