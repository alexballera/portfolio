import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {InfoProductInterface} from "../../interfaces/info-product.interface";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              public productsService: ProductsService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      this.productsService.getProduct(params.id)
        .subscribe((product: InfoProductInterface) => {

          console.log(product)
        });
    })

  }

}
