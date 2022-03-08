import { CommonModule } from '@angular/common';
import { UserModule } from "./user/modules/user.module";
import { NgModule } from "@angular/core";
import { ProductItemComponent } from './product/components/product-item/product-item.component';
import { MatCardModule } from "@angular/material/card";
import { SharedModule } from "../../shared/shared.module";
import { EditProductDialogComponent } from './product/dialogs/edit-product-dialog/edit-product-dialog.component';


@NgModule({
  declarations: [
    ProductItemComponent,
    EditProductDialogComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    UserModule,
  ],
  exports: [
    UserModule,
    ProductItemComponent
  ]
})
export class PrivateModule {
}
