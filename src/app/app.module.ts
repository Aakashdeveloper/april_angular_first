import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CarComponent} from './car.component';
import { ProductComponent } from './products/product.component';
import { ProductUpperPipe } from "./products/product-Upper.pipe";
import { ProductFilterPipe } from "./products/product-filter.pipe";



@NgModule({
    imports:[
        BrowserModule,
        FormsModule
    ],
    declarations:[
        AppComponent,
        CarComponent,
        ProductComponent,
        ProductUpperPipe,
        ProductFilterPipe
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}