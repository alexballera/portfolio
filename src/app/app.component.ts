import { Component } from '@angular/core';
import {InfoPageService} from "./services/info-page.service";
import {ProductsService} from "./services/products.service";
import {ArticlesService} from "./services/articles.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public infoPageService: InfoPageService,
              public productsService: ProductsService,
              public articlesService: ArticlesService) {}
}
