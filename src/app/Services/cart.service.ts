import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';
import { Cart } from '../Core/Model/Cart';
import { CartItem } from '../Core/Model/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart={
    name:"",
    cardNumber:"",
    cartItems :[],
    address:"",
    totalPrice:0
  }
  public cart$ :BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }
  public addToCart(item :CartItem){
    Swal.fire({
      icon: 'success',
      title: 'Added To Cart Successfully',
      showConfirmButton: false,
      timer: 1500
    });
    let cartItem =this.cart.cartItems.find(x=>x.id == item.id);
    if(cartItem === undefined){
      this.cart.cartItems.push(item);
    }else {
      cartItem.qauntity+=item.qauntity;
    }

    this.cart$.next(this.cart);
  }
  public removeFromCart(id :number){
    let indexx = this.cart.cartItems.findIndex(x=>x.id == id);
    Swal.fire({
      title: 'Do You want to remove this item?',

      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Remove'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Removed!',
          'Your Item has been Removed.',
          'success'
        )
        this.cart.cartItems.splice(indexx,1);
        if(this.cart.cartItems.length ===0){
          this.resestCart()
        }
      }else {
        let cartItem =this.cart.cartItems.at(indexx);
        if(cartItem !== undefined){
          cartItem.qauntity = 1
          this.cart$.next(this.cart);
        }

      }
    })
    this.cart$.next(this.cart);

  }
  public resestCart(){
    this.cart={
      name:"",
      cardNumber:"",
      cartItems :[],
      address:"",
      totalPrice:0
    };
    this.cart$.next(this.cart);
  }



}
