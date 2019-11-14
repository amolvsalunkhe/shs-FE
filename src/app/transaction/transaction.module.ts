import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetComponent } from './target/target.component';
import { TransactionRoutingModule } from './transaction.route';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {FormsModule, ReactiveFormsModule, FormArray, Validators} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import { HandoverViewComponent } from './handover-view/handover-view.component';
import { ManagerHandoverViewComponent } from './manager-handover-view/manager-handover-view.component';
@NgModule({
  declarations: [TargetComponent, HandoverViewComponent, ManagerHandoverViewComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    CollapseModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CalendarModule,
    ModalModule.forRoot()
  ]
})
export class TransactionModule { }
