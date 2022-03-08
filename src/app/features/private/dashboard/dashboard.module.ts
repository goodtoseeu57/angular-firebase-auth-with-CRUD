import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProductItemComponent } from "../product/components/product-item/product-item.component";
import { PrivateModule } from "../private.module";
import { SharedModule } from "../../../shared/shared.module";


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrivateModule,
    SharedModule
  ]
})
export class DashboardModule {
}
