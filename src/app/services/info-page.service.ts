import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InfoPage} from "../interfaces/info-page.interface";

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};

  loading: boolean = false;

  constructor(private http: HttpClient) {

    this.http.get('assets/data/data-page.json')
      .subscribe((resp: InfoPage) => {

        this.loading = true;
        this.info = resp
        console.log(resp)
      })

  }
}
