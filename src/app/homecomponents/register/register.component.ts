import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  onSubmit(form: NgForm) { 
    console.log(form);
   }

  constructor() { }

  ngOnInit() {
  }

}
