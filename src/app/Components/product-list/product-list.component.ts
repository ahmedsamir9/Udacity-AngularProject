import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/Core/Model/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy {
  productList :Product[]=[]
  subscriber: Subscription = new Subscription;
  constructor(private productservice :ProductService) { }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe()
  }

  ngOnInit(): void {
    this.subscriber = this.productservice.getAllProducts().subscribe(x=>{this.productList=x
    });
  }

}
