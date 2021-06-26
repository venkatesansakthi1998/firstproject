import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  
  
  
   userForm :FormGroup;
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'firstname': new FormControl(null,Validators.required),
      'lastname': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'phonenumber': new FormControl(null,Validators.required),
     
      
     

    });

  
  }

 
  resetValue(){
    this.userForm.reset({firstname: '', email: '', lastname: '',phonenumber:'',});
  }


  onsubmit(){
    const formdata = this.userForm.getRawValue();
   
    console.log(formdata);
  }
}
