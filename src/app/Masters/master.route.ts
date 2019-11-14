import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopComponent } from './shop/shop.component'
import { ProductComponent } from './product/product.component'
import { UserComponent } from './user/user.component'

const routes: Routes = [
  {
  path: '',
  data: {
    title: 'Master'
  },
  children: [
      {
        path:'shop',
        component:ShopComponent,
        data: {
          title: 'Shop'
        }
      },
      {
        path:'user',
        component:UserComponent,
        data: {
          title: 'User'
        }
      },
      {
        path:'product',
        component:ProductComponent,
        data: {
          title: 'Product'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule {}
