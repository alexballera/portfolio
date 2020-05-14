import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InfoProductsInterface} from "../interfaces/info-products.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading: boolean = true;

  products: InfoProductsInterface[] = [];

  constructor(private http: HttpClient) {
    this.getProducts()
  }

  private getProducts() {
    this.http.get('https://portafolio-dea7a.firebaseio.com/productos_idx.json')
      .subscribe((resp: InfoProductsInterface[]) => {

        this.loading = false;

        this.products = resp;

      })
  }
}
