import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {InfoPageService} from "../../services/info-page.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _infoPage: InfoPageService,
              private router: Router) { }

  ngOnInit(): void {
  }

  searchProduct(term: string) {
    if (term.length < 1) {
      return
    }

    this.router.navigate(['/search', term])
      .then(r => {
      if (r) {
        return
      }
    });

  }

}
