import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { OrderComp } from "./orders/order.component";
import { HomeComp } from "./home/home.component";
import { NotFoundComp } from "./shared/notFound.component";
import { ProductModule } from "./products/product.module";

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        ProductModule,
        RouterModule.forRoot([
            {path:'orders', component:OrderComp},
            {path:'home', component:HomeComp},
            {path:'',redirectTo:'home', pathMatch:'full'},
            {path:'**', component:NotFoundComp}
        ])
    ],
    declarations:[
        AppComponent,
        OrderComp,
        HomeComp,
        NotFoundComp
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}