import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: any = {};

  loading: boolean = false;

  constructor(private http: HttpClient) {

    this.http.get('assets/data/data-page.json')
      .subscribe(resp => {

        this.loading = true;
        this.info = resp
        console.log(resp)
      })

  }
}
