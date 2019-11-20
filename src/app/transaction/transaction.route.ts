import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TargetComponent } from './target/target.component';
import { ManagerHandoverViewComponent } from './manager-handover-view/manager-handover-view.component';

const routes: Routes = [
  {
  path: '',
  data: {
    title: 'Transaction'
  },
  children: [
      {
        path:'form',
        component:TargetComponent,
        data: {
          title: 'Form'
        }
      },
      {
        path:'manager/handover/view',
        component:ManagerHandoverViewComponent,
        data: {
          title: 'Resource Handovers'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule {}
