import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from './products';

@Pipe({
    name:"EduPipe"
})

export class ProductUpperPipe implements PipeTransform{
    transform(value:number):number{
       
        return value
    }
}