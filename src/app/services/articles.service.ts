import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InfoArticlesInterface} from "../interfaces/info-articles.interface";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  loading: boolean = true;

  articles: InfoArticlesInterface[] = [];

  constructor(private http: HttpClient) {
    this.getArticles()
  }

  private getArticles() {
    this.http.get('https://portafolio-dea7a.firebaseio.com/productos_idx.json')
      .subscribe((resp: InfoArticlesInterface[]) => {

        this.loading = false;

        this.articles = resp;

      })
  }
}
