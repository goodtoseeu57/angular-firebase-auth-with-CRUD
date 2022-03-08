import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SnackbarService } from "../../../../../shared/services/snackbar.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productForm!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private productService: ProductService, private snackbarService: SnackbarService) {
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['']
    })
  }

  createProduct() {
    if (this.productForm.valid) {
      this.productService.post(this.productForm.value, '').subscribe(res => {
        this.snackbarService.showSnackBar('New Product has been created', 'successCssSnackBar')
        this.router.navigateByUrl('private/dashboard');
      }, err => this.snackbarService.showSnackBar('Sorry something went wrong', 'failureCssSnackBar'))
    }
  }
}
