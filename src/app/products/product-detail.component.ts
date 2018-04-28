import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
    templateUrl:'./product-detail.component.html'
})

export class ProductDetailComp{
    title="Product Details";
    productId:number;
    name:string;
    desc:string
    image:string

    constructor(private _route:ActivatedRoute,
                private _router:Router){}

    ngOnInit(): void{
        let id = this._route.snapshot.params['id'];
        this.productId = id;

        this._route
            .queryParams
            .subscribe((params)=>{
                this.name = params['name'];
                this.desc=params['desc'];
                this.image= params['img']
            });
    }
    
    onBack():void{
        this._router.navigate(['/products'])
    }
}