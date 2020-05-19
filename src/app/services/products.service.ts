import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Products} from "../interfaces/info-products.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading: boolean = true;
  products: Products[] = [];
  productsFiltered: Products[] = [];

  constructor(private http: HttpClient) {
    this.getProducts()
  }

  private getProducts() {
    this.http.get('https://portafolio-dea7a.firebaseio.com/productos_idx.json')
      .subscribe((resp: Products[]) => {

        this.loading = false;

        this.products = resp;

      })
  }

  getProduct(id: string) {
    return this.http.get(`https://portafolio-dea7a.firebaseio.com/productos/${id}.json`)
  }

  searchProducts(term: string) {
    this.productsFiltered = this.products.filter(product => {
      return true
    })

    console.log(this.productsFiltered)
  }
}
