import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MenuComponent } from './menu.component';

import { UserComponent } from './user/user.component';
import { SignComponent } from './sign/sign.component';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';



 

@NgModule({

  declarations: [

    AppComponent,

    MenuComponent,
     
     UserComponent,
     SignComponent,
     
     HomeComponent,
     AddEmployeeComponent,
     EditEmployeeComponent
  
   

  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule ,
    FormsModule,

    HttpClientModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }