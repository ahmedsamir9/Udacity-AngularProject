import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { CartItem } from 'src/app/Core/Model/CartItem';
import { Product } from 'src/app/Core/Model/Product';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit ,OnDestroy{
  productItem:Product = {
    id:0,
    name :"ss",
    description:"ss",
    url:"ssd",
    price:15.6
  }
  id :number =0;
  numbers:number[]=[];
  selectedQuantity:string = "1";
  subscriber: Subscription = new Subscription;
  constructor(private router:ActivatedRoute,private productService:ProductService,private cartService:CartService) {
    this.numbers = Array(10).fill(0).map((x,i)=>i+1); // [0,1,2,3,4]
  }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }


  ngOnInit(): void {
    this.router.params.subscribe(x=>{
      this.id = +x['id'];
    this.subscriber= this.productService.getProductById(this.id).subscribe(item=>this.productItem=item);
    }
    );
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
  // from stackoverflow
  selectChangeHandler (event: any) {
    this.selectedQuantity = event.target.value;
  }

}
