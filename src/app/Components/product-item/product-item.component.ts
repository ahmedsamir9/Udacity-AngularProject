import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/Core/Model/CartItem';
import { Product } from 'src/app/Core/Model/Product';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  numbers:number[]=[]
  @Input() productItem:Product = {
    id:0,
    name :"ss",
    description:"ss",
    url:"ssd",
    price:15.6
  }
  selectedQuantity:string = "1"
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.numbers = Array(10).fill(0).map((x,i)=>i+1); // [0,1,2,3,4]
  }
  public addToCart(){
    const item : CartItem ={
      id:this.productItem.id,
      name:this.productItem.name,
      price :this.productItem.price,
      qauntity:+this.selectedQuantity,
      url:this.productItem.url
    }
    this.cartService.addToCart(item);
  }
 
}
