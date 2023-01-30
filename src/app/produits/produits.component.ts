import { Component, EventEmitter, Input,  OnInit, Output  } from '@angular/core';
import { Data } from '@angular/router';
import { SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  //parent vers child
  @Input() NameProduit = "";
 

  //child vers parent
  @Output() public reponse = new EventEmitter();
constructor(){}

    ngOnInit(): void{}
   public RepProduit(){
      this.reponse.emit("This is not a product");
    }
   
}
