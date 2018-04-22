import {Component, OnChanges, Input,
        Output, EventEmitter} from '@angular/core';

@Component({
    selector:'star-comp',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating:number;
    starWidth:number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges():void{
        this.starWidth = this.rating*86/5
    }

    onStar():void{
        this.ratingClicked.emit(`The rating clicked is ${this.rating}`)
    }
}
/*
  var a = 10;
  var b = "i am getting answer"+a

  var c = `i am geting answer ${this.a}`

  function add(a,b){
      return a+b
  }

  var sum = add(1,2)

  A coding pattern in which class receives the instance of objects it needs from an external
  source rather than creating itself

  MEAN
  
*/