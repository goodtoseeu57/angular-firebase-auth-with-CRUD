import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from '../pages/user/user-routing.module';
import { UserComponent } from '../pages/user/user.component';
import { ProfileBadgeComponent } from "../components/profile-badge/profile-badge.component";
import { SharedModule } from "../../../../shared/shared.module";
import { MatMenuModule } from "@angular/material/menu";


@NgModule({
  declarations: [
    UserComponent, ProfileBadgeComponent
  ],
  exports: [
    ProfileBadgeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatMenuModule
  ]
})
export class UserModule {
}
