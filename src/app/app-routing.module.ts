import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from "./features/private/private.component";
import { AngularFireAuthGuard } from "@angular/fire/compat/auth-guard";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'private', component: PrivateComponent, canActivate: [AngularFireAuthGuard], children: [
      {path: 'user', loadChildren: () => import('./features/private/user/modules/user.module').then(m => m.UserModule)},
      {path: 'dashboard', loadChildren: () => import('./features/private/dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: 'product', loadChildren: () => import('./features/private/product/pages/product/product.module').then(m => m.ProductModule)}
    ]
  },

  {path: '', loadChildren: () => import('./features/public/landing/pages/landing/landing.module').then(m => m.LandingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
