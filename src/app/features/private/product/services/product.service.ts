import { Injectable } from '@angular/core';
import { ApiService } from "../../../../shared/services/api.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";
import { IProduct } from "../interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ApiService<IProduct> {

  constructor(http: HttpClient) {
    super(http, environment.productService, 'product')
  }
}
