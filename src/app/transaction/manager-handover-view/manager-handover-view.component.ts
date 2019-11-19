import { Component, OnInit, ViewChild } from '@angular/core';
import { GenericService } from '../../shared/generic.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-manager-handover-view',
  templateUrl: './manager-handover-view.component.html',
  styleUrls: ['./manager-handover-view.component.scss']
})
export class ManagerHandoverViewComponent implements OnInit {

  constructor(private genericService: GenericService) { }
  handovers:any=[];
  tasks:any=[];
  @ViewChild('primaryModal', { static: false }) public primaryModal: ModalDirective;
  ngOnInit() {
    this.getHandOvers();
  }
  getHandOvers(){
    this.genericService.get("/api/handover/handovers").subscribe(res=>{
      this.handovers=res.data
    });
  }

  view(id){
    var params={"id":id};
    this.genericService.get("/api/handovermap/maps/"+id).subscribe(res=>{
      this.tasks=res.data
      this.primaryModal.show();
    });
  }
}
