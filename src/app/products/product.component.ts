import {Component, OnInit} from '@angular/core';
import {IProduct} from './products';
import {ProductService} from './product.service';

@Component({
    selector:'prod-comp',
    templateUrl:'./product.component.html',
    //styles:['thead{color:green;}','h3{color:red}']
    styleUrls:['./product.component.css']
})

export class ProductComponent implements OnInit{
   title="*****Product List******";
   showTable=true;
   imageWidth=50;
   showImage=false;
   filterData;
   products:IProduct[];
   errorMessage:string;

   constructor(private _producService:ProductService){

   }

   toggleImage():void{
     this.showImage = !this.showImage
   }
  
  

   ngOnInit():void{
       this._producService.getProducts()
           .subscribe((data) => this.products = data,
                    (err) => this.errorMessage = err )

   }
  
   onDataRecive(message:string){
     this.title="*****Product List******>>>>>"+message
   }
}


/*
one way binding
--data binding {{}}
--property binding []
--event binding ()
two way binding ([])

string
number 
boolean

function add(a,b){
  return a+b
}

var add = (a,b) =>{this.sum = a+b}

*/


