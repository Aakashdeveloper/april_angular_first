import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { CarComponent } from './car.component';
import { ProductComponent } from './products/product.component';
import { ProductUpperPipe } from "./products/product-Upper.pipe";
import { ProductFilterPipe } from "./products/product-filter.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductService } from "./products/product.service";
import { ProductDetailComp } from "./products/product-detail.component";
import { OrderComp } from "./orders/order.component";
import { HomeComp } from "./home/home.component";
import { NotFoundComp } from "./shared/notFound.component";



@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations:[
        AppComponent,
        CarComponent,
        ProductComponent,
        ProductUpperPipe,
        ProductFilterPipe,
        StarComponent,
        ProductDetailComp,
        OrderComp,
        HomeComp,
        NotFoundComp


    ],
    bootstrap:[
        AppComponent
    ],
    providers:[
        ProductService
    ]
})

export class AppModule{}