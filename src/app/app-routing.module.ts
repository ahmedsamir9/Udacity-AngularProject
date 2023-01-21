import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { ConfirmationComponent } from './Components/confirmation/confirmation.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

const routes: Routes = [
{path : "",redirectTo: "porudctList",pathMatch:"full"},
{path :"porudctList",component :ProductListComponent},
{path : "cart",component:CartComponent},
{path: 'product/:id',component :ProductDetailComponent},
{path:'Confirmation',component:ConfirmationComponent },
{path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
