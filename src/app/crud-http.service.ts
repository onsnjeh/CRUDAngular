import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudHttpService {
  
  constructor(private http : HttpClient) { }
  //create
  // PostUser(data : any){
  //   return this.http.post<any>("http://localhost:3000/user",data).pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  //read
  GetUser(){
    return this.http.get<any>("http://localhost:3000/User").pipe(map((res:any)=>{
    
      return res;
    }))
  }
  GetUserById(id : Number){
    return this.http.get<any>("http://localhost:3000/User/"+id).pipe(map((res:any)=>{
    
    return res;
  }))
  }
  //update
  UpdateUser(data : any , id : Number){
    return this.http.put<any>("http://localhost:3000/User/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  //delete
  DeleteUser(id : Number){
    return this.http.delete<any>("http://localhost:3000/User/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }
}

