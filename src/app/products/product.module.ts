import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

import { ProductComponent } from "./product.component";
import { ProductUpperPipe } from "./product-Upper.pipe";
import { ProductFilterPipe } from "./product-filter.pipe";
import { ProductDetailComp } from "./product-detail.component";
import { ProductService } from "./product.service";
import { ProductRouteGaurds } from "./product-gaurds.service";


@NgModule({
    declarations:[
        ProductComponent,
        ProductUpperPipe,
        ProductFilterPipe,
        ProductDetailComp
    ],
    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'products', component:ProductComponent},
            {path:'products/:id',canActivate:[ProductRouteGaurds], component:ProductDetailComp}
        ])
    ],
    providers:[
        ProductService,
        ProductRouteGaurds
    ]
})

export class ProductModule{}