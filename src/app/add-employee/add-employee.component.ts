import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudHttpService } from '../crud-http.service';
import { UserData } from '../home/home.modal';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  formValue!:FormGroup;
  ListUserData : any;
  HomeDataObject : UserData = new UserData 
  constructor(private fb: FormBuilder ,private router : Router , private CHService: CrudHttpService, private http: HttpClient){} 
   ngOnInit(): void {
    this.formValue=this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required], 
      Email:['',Validators.required], 
      password:['',Validators.required]
    })
    this.GetData()
  }
  AddUser(){
  /*  this.HomeDataObject.fname=this.HomeDataObject.fname;
    this.HomeDataObject.lname=this.formValue.value.lname;
    this.HomeDataObject.Email=this.formValue.value.Email;
    this.HomeDataObject.password=this.formValue.value.password;*/
    // console.log(this.HomeDataObject);

    this.http.post<any>("http://localhost:3000/User",this.formValue.value).subscribe(res=>{
     // this.formValue.reset()
    
    // this.CHService.PostUser(this.HomeDataObject).subscribe(res=>{
      console.log(res)
      this.formValue.reset()
      this.GetData()
      this.router.navigate(["/Home"])
      alert("succes")
    },error=>{
      this.router.navigate(["/Home"])
      alert("fail")
    });
  }
  GetData()
  {
    this.CHService.GetUser().subscribe(res=>{
      this.ListUserData=res;
    })
  }
  btnclose()
  { this.router.navigate(["/Home"])}
}
