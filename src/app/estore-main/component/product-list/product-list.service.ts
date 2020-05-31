import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private REQUEST_URL = "ecommerce"

  constructor(private httpClient: HttpClient) { }

  getCategoryList(){
    return this.httpClient.get(`${this.REQUEST_URL}/getCategoryList`);
  }

  getManufacturerList(){
    return this.httpClient.get(`${this.REQUEST_URL}/getManufacturerList`);
  }
}
