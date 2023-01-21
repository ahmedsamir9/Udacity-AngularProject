import { CartItem } from "./CartItem";

export interface Cart{
 totalPrice:number,
 name:string,
 address:string,
 cardNumber:string,
 cartItems:CartItem[]
}
