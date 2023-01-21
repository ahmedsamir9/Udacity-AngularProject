import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/Core/Model/Cart';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnDestroy,OnChanges {
cart:Cart={
    name:"",
    cardNumber:"",
    cartItems :[],
    address:"",
    totalPrice:0
  }
  constructor(private cartService:CartService,private router:Router) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.cart.cartItems.forEach(x=>this.cart.totalPrice += x.price*x.qauntity);
  }
  subscriber: Subscription = new Subscription;
  ngOnDestroy(): void {
    this.subscriber.unsubscribe()
  }

  ngOnInit(): void {
    this.subscriber =this.cartService.cart$.subscribe(x=>{
      this.cart= x
     this.changeQuantity()
    });

  }
  public removeFromCart(id:number){
    this.cartService.removeFromCart(id);
    this.changeQuantity();
  }
  public changeQuantity(){
    this.cart.totalPrice=0;
    this.cart.cartItems.forEach(x=>{
      this.cart.totalPrice += x.price*x.qauntity});
  }
  public submitOrder(){
    this.router.navigate(
      ['/Confirmation'],
      { queryParams: { name: this.cart.name,totalAmount:this.cart.totalPrice} }

    );
    this.cartService.resestCart()
  }

}
