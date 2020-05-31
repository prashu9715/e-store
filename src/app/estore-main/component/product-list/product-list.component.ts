import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  categoryList: any;
  manufacturerList: any;
  ready: boolean = false;

  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {
    forkJoin([this.productListService.getCategoryList(),
    this.productListService.getManufacturerList()]).subscribe(response => {
      this.categoryList = response[0];
      this.manufacturerList = response[1];
      this.ready = true;
    });
  }

}
