import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudHttpService } from '../crud-http.service';
import {UserData} from './home.modal'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formValue!:FormGroup;
  HomeDataObject : UserData = new UserData 
  ListUserData : any;
  
  constructor(private fb: FormBuilder ,private router : Router , private CHService: CrudHttpService){}
  ngOnInit(): void {
   this.formValue=this.fb.group({
    fname:[],
    lname:[],
    Email:[],
    password:[]
   })
    this.GetData()
  }
 showAdd(){
  this.router.navigate(["/Add"])
}
  //Ajouter User
 /* AddUser(){
    this.HomeDataObject.fname=this.formValue.value.fname;
    this.HomeDataObject.lname=this.formValue.value.lname;
    this.HomeDataObject.Email=this.formValue.value.Email;
    this.HomeDataObject.password=this.formValue.value.password;

    this.CHService.PostUser(this.HomeDataObject).subscribe(res=>{
      console.log(res)
      this.formValue.reset()
      this.GetData()
      alert("succes")
    },(error=>{
      alert("fail")
    }));
  }*/
  GetData()
  {
    this.CHService.GetUser().subscribe(res=>{
      this.ListUserData=res;
    })
  }

  //delete
  DeleteUsers(data : any){
    if(confirm('are your sure delete'))
    console.log(data);
    
   this.CHService.DeleteUser(data.id).subscribe(res=>{
      alert("succes")
      this.GetData()
    })
  }
 /* Edit(data : any){
    
   
    this.router.navigate(["/Edit"])
  }*/
  Update(data : any)
  {
     this.HomeDataObject.id=data.id
    this.formValue.controls['fname'].setValue(data.fname)
    this.formValue.controls['lname'].setValue(data.lname)
    this.formValue.controls['Email'].setValue(data.Email)
    this.formValue.controls['password'].setValue(data.password)
    this.router.navigate(["/Edit/:id"])

  }
  logout()
  {
    this.router.navigate(["/user"])

  }
}
