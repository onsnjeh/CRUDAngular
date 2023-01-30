import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  login:FormGroup|any;
  constructor(private router : Router , private fb: FormBuilder ,  private _http:HttpClient ){} 
  ngOnInit(): void {
    this.login=this.fb.group({
      Email:['',Validators.required],
      password:['',Validators.required]
  })}
  
    btn(){
      this.router.navigate(["/sign"])
    }
    btnLog(){
      this._http.get<any>("http://localhost:3000/Register").subscribe(res=>{
        const user = res.find((a:any)=>{
          return a.Email === this.login.value.Email && a.password === this.login.value.password
        });
        if(user){
          this.login.reset();
          this.router.navigate(['/Home']);
        }else{
          alert('User Not Found');
        }
      }, err=>{
        alert('Something was wrong');
      })
     
  
    }
}
