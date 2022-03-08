import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product/services/product.service";
import { IProduct } from "../product/interfaces/product.interface";
import { take } from "rxjs/operators";
import { SnackbarService } from "../../../shared/services/snackbar.service";
import { MatDialog } from "@angular/material/dialog";
import { EditProductDialogComponent } from "../product/dialogs/edit-product-dialog/edit-product-dialog.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  products: any;
  loadingSpinner: boolean = true;

  constructor(private productService: ProductService, private snackBarService: SnackbarService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.get('').pipe(take(1)).subscribe(products => {
      this.products = products;
      this.loadingSpinner = false;
    })
  }

  editProduct(product: IProduct) {
    const dialogRef = this.dialog.open(EditProductDialogComponent, {
      data: product
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      this.getProducts();
    });
  }


  deleteProduct(product: IProduct) {
    const deleteConfirmation = confirm(`Are you sure you want to delete ${product.name}`);
    if (!deleteConfirmation) return;
    this.productService.delete(`/${product._id}`, product).pipe(take(1)).subscribe(res => {
      this.snackBarService.showSnackBar('Product has been deleted', 'successCssSnackBar')
    }, err => this.snackBarService.showSnackBar('Sorry something went wrong', 'failureCssSnackBar'))
  }
}
