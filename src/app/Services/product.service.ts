import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Product } from '../Core/Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  public getAllProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>('../../assets/data.json');
  }
  public getProductById(id:number):Observable<any>{
    return this.httpClient.get<Product[]>('../../assets/data.json').pipe(
      map(x=> x.find(x=>x.id == id))
    );
  }


}
