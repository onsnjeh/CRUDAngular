import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  ActivatedRoute, Router} from '@angular/router';
import { CrudHttpService } from '../crud-http.service';
import { UserData } from '../home/home.modal';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
 // formValue!:FormGroup;
  ListUserData : any;
  HomeDataObject : UserData = new UserData
  formValue = new FormGroup ({
    fname : new FormControl(''),
    lname : new FormControl(''),
    Email: new FormControl(''),
    password : new FormControl ('')
  }
     ); 
  constructor(private fb: FormBuilder  , private route : Router
    ,private CHService: CrudHttpService, private router:ActivatedRoute){} 
  //  ngOnInit(): void {
  //   this.formValue=this.fb.group({
  //     fname:['',Validators.required],
  //     lname:['',Validators.required], 
  //     Email:['',Validators.required], 
  //     password:['',Validators.required]
  // //   })
  //   this.GetData()
  // }
  
    // btn(){
    //   this.HomeDataObject.id=this.formValue.value.id;
    //   this.HomeDataObject.fname=this.formValue.value.fname;
    //   this.HomeDataObject.lname=this.formValue.value.lname;
    //   this.HomeDataObject.Email=this.formValue.value.Email;
    //   this.HomeDataObject.password=this.formValue.value.password;
    //   this.CHService.UpdateUser(this.HomeDataObject,this.HomeDataObject.id).subscribe(res=>{
    //     this.formValue.reset()
    //   this.GetData()
    //   this.route.navigate(["/Home"])
    //     alert("success")
    //   },
    //   (error=>{
    //     alert("fail")
    //   }));
    // }
    GetData()
  {
    this.CHService.GetUser().subscribe(res=>{
      this.ListUserData=res;
    })
  }
  btnclose()
  { this.route.navigate(["/Home"])}


//   constructor(private etudiant:EtudentsService , private router:ActivatedRoute) {}
// editEtudiant = new FormGroup ({
//   nom : new FormControl(''),
//   prenom : new FormControl(''),
//   mail: new FormControl('')}
// );

ngOnInit(): void {
 console.log(this.router.snapshot.params["id"]);
  this.CHService.GetUserById(this.router.snapshot.params["id"]).subscribe((res:any)=>{
    console.log(res);
    this.formValue = new FormGroup ({
      fname : new FormControl(res["fname"]),
      lname : new FormControl(res["lname"]),
      Email: new FormControl(res['Email']),
      password : new FormControl(res['password'])
    }
    );
   
  });
  
}

updateData(){
  console.log(this.formValue.value);
  this.CHService.UpdateUser(this.formValue.value,this.router.snapshot.params["id"]).subscribe((res)=>{
    this.formValue.reset({})
    this.route.navigate(["/Home"])
    
  })
}
  
}
