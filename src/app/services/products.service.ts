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
    this.getProducts().then(r => {
      if (r) {
        return;
      }
    })
  }

  private getProducts() {

    return new Promise((resolve, reject) => {

      this.http.get('https://portafolio-dea7a.firebaseio.com/productos_idx.json')
        .subscribe((resp: Products[]) => {
          this.loading = false;
          this.products = resp;
          resolve();
        })
    })


  }

  getProduct(id: string) {
    return this.http.get(`https://portafolio-dea7a.firebaseio.com/productos/${id}.json`)
  }

  searchProducts(term: string) {
    if (this.products.length === 0) {
      this.getProducts().then(() => {
        this.filterProducts(term);
      })
    } else {
      this.filterProducts(term);
    }
  }

  private filterProducts(term: string) {
    this.productsFiltered = []

    term = term.toLocaleLowerCase();

      this.products.forEach(prod => {
        const titleLower = prod.titulo.toLocaleLowerCase();
      if(prod.categoria.indexOf(term) >= 0 || titleLower.indexOf(term) >= 0) {
        this.productsFiltered.push(prod)
      }
    })
  }
}
