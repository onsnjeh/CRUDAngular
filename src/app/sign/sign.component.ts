import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../home/home.modal';



@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  formValue!:FormGroup;
  ListUserData : any;
  HomeDataObject : UserData = new UserData 
  constructor(private fb: FormBuilder ,private router : Router , private http: HttpClient){} 
   ngOnInit(): void {
    this.formValue=this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required], 
      Email:['',Validators.required], 
      password:['',Validators.required]
    })
  }
  create(){
   /* this.HomeDataObject.fname=this.formValue.value.fname;
    this.HomeDataObject.lname=this.formValue.value.lname;
    this.HomeDataObject.Email=this.formValue.value.Email;
    this.HomeDataObject.password=this.formValue.value.password;*/

    this.http.post<any>("http://localhost:3000/Register",this.formValue.value).subscribe(res=>{
      this.formValue.reset()
      this.router.navigate(["/user"])
    },(error=>{
      alert("fail")
    }));
  }
 
  }

  
