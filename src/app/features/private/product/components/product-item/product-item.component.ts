import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IProduct } from "../../interfaces/product.interface";

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product!: IProduct;
  @Output() editProductEvent = new EventEmitter<IProduct>();
  @Output() deleteProductEvent = new EventEmitter<IProduct>();

  constructor() {
  }

  ngOnInit(): void {
  }

  editProduct() {
    this.editProductEvent.emit(this.product);
  }

  deleteProduct() {
    this.deleteProductEvent.emit(this.product);
  }

}
