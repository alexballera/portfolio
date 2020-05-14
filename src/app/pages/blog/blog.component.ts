import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../../services/articles.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(public articlesService: ArticlesService) {}

  ngOnInit(): void {
  }

}
