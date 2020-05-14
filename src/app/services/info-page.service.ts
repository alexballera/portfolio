import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InfoPage} from "../interfaces/info-page.interface";
import {InfoTeam} from "../interfaces/info-team.interface";

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};

  team: InfoTeam[] = [];

  loading: boolean = true;

  constructor(private http: HttpClient) {

    this.getInfo()

    this.getTeam()
  }

  private getInfo () {
    this.http.get('assets/data/data-page.json')
      .subscribe((resp: InfoPage) => {

        this.loading = false;

        this.info = resp
        console.log(this.info)
      })
  }

  private getTeam () {
    this.http.get('https://portafolio-dea7a.firebaseio.com/team.json')
      .subscribe((resp: InfoTeam[]) => {

        this.loading = false;

        this.team = resp
      })
  }
}
