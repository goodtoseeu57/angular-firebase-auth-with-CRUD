import { Component, OnInit, Inject } from '@angular/core';
import { IProduct } from "../../interfaces/product.interface";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductService } from "../../services/product.service";
import { SnackbarService } from "../../../../../shared/services/snackbar.service";
import { take } from "rxjs/operators";


@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.scss']
})
export class EditProductDialogComponent implements OnInit {
  productForm!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IProduct, private formBuilder: FormBuilder,
              private productService: ProductService,
              private snackBarService: SnackbarService
  ) {
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: [this.data.name, Validators.required],
      description: [this.data.description, Validators.required],
      imageUrl: [this.data.imageUrl ?? 'null']
    })
  }

  editProduct() {
    this.productService.patch(this.productForm.value, `/${this.data._id}`).pipe(take(1)).subscribe(res => {
      this.snackBarService.showSnackBar('Product has been updated', 'successCssSnackBar')
    }, err => this.snackBarService.showSnackBar('Sorry something went wrong', 'failureCssSnackBar'))
  }

}
