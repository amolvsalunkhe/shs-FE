import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { MasterRoutingModule } from './master.route'
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {FormsModule, ReactiveFormsModule, FormArray, Validators} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {JwPaginationComponent} from 'jw-angular-pagination'

@NgModule({
  declarations: [ShopComponent, UserComponent, ProductComponent,JwPaginationComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    CollapseModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TableModule,
    CalendarModule
  ]
})
export class MasterModule { }
