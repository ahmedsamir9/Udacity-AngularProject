import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit,OnDestroy {

  name:string =''
  totalAmount:string=''
  subscriber: Subscription = new Subscription;
  constructor(private activatedRouter:ActivatedRoute,private router :Router) {
    this.subscriber = activatedRouter.queryParams.subscribe(x=>{
      this.name=x['name']
      this.totalAmount= x["totalAmount"]
    })

   }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe()
  }

  ngOnInit(): void {
  }
  public routeToProducts(){
    this.router.navigate([""]);
  }

}
