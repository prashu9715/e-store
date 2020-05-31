import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private REST_API_SERVER = "ecommerce/getCategoryList";
  categoryList:any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(this.REST_API_SERVER).subscribe(data => {
      this.categoryList = data;
    })
  }

}
