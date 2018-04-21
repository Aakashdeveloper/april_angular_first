import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from './products';

@Pipe({
    name:"EduPipe"
})

export class ProductUpperPipe implements PipeTransform{
    transform(value:IProduct):IProduct[]{
        if(value<20){
            value = value +10
        }
        return value
    }
}