import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignComponent } from './sign/sign.component';

import { AddEmployeeComponent } from './add-employee/add-employee.component';

import { HomeComponent } from './home/home.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';


const routes: Routes = [
 // { path: '', redirectTo: '/produits', pathMatch: 'full' },
 // { path: "produits", component : ProduitsComponent},
 
 { path: '', redirectTo: '/user', pathMatch: 'full' },
 { path: "Home", component : HomeComponent
 },
 { path : "Edit/:id", component : EditEmployeeComponent },
 { path : "Add", component : AddEmployeeComponent },
 
 //{ path: "menu", component : MenuComponent},
// { path: "add-produit", component : AddProduitComponent},
 //{  path: "list-produit", component : ListProduitComponent },
  {  path: "user", component : UserComponent },
 { path: "sign", component : SignComponent
 }
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
