import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/Core/Model/CartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
 @Input() item :CartItem=
  {
    id:1,
    name:"",
    price :10.2,
    qauntity:1,
    url:""
  }
  @Output() itemEmitter = new EventEmitter<number>();
  @Output() itemEmitterAdder = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  public checkitemRemoval(){
    if(this.item.qauntity < 1) {
      this.itemEmitter.emit(this.item.id);
    }else{
      this.itemEmitterAdder.emit(this.item.qauntity);
    }
  }

}
