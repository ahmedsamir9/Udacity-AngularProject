import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductItemComponent } from './Components/product-item/product-item.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ConfirmationComponent } from './Components/confirmation/confirmation.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import{HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';
import { CartItemComponent } from './Components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductItemComponent,
    CartComponent,
    ProductListComponent,
    ConfirmationComponent,
    ProductDetailComponent,
    PageNotFoundComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  HttpClientModule,
  FormsModule,
  NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
