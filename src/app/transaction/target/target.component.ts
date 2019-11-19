import { Component, OnInit, ViewChild } from '@angular/core';
import { UserTargetModel } from '../../models/userTarget';
import { RoleModel } from '../../models/role';
import { RegexPatterns } from '../../common/regexPatterns';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { GenericService } from '../../shared/generic.service'
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})
export class TargetComponent implements OnInit {
  @ViewChild('primaryModal', { static: false }) public primaryModal: ModalDirective;
  tasks: any[];
  roles:any[];
  users:any[];
  userForm: FormGroup;
  userTargetModel: UserTargetModel;
  role:RoleModel;
  RegexPatterns: RegexPatterns;
  isSubmitted: boolean;
  pageOfItems: Array<any>;
  en:any;
  selecteduser:any;
  response:any=[];
  listobj:any=[]

  constructor(private genericService: GenericService) {
    this.userTargetModel = new UserTargetModel();
    this.RegexPatterns= new RegexPatterns();
    this.en = {
      firstDayOfWeek: 0,
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"],
      monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
      monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
      today: 'Today',
      clear: 'Clear',
      dateFormat: 'mm/dd/yy',
      weekHeader: 'Wk'
  };
  }

  ngOnInit() {
    this.getTasks();
    this.getUsers();
  }

  getUsers(){
    this.genericService.get("/api/user/users").subscribe(res=>{
      this.users=res.data
    });
  }

  getTasks() {
    this.genericService.get("/api/task/tasks").subscribe(res=>{
      this.createResponse(res.data);
      this.tasks=res.data
      this.tasks.forEach(ele=>{
        this.listobj.push({"handOver":{"id":''},"task":{"id":ele.id},"description":''})
      })
    });
  }
  createResponse(data){
    //this.response.add({"i"})
  }
  ChangingValue(event){
    console.log("",this.selecteduser);
  }

  onChange(task,rowIndex,event){
    var ele=document.getElementById(rowIndex);
    this.listobj[rowIndex].description=ele['value'];
  }
submit(){
  var createdByUser=JSON.parse(localStorage.getItem("shsUser")).id.data;
  var params={"createdAt":new Date(),"createdByUser":{"id":createdByUser},"receivedByUser":{"id":this.selecteduser}}
  this.genericService.Post("/api/handover/handovers",params).subscribe(res=>{
    this.submitMap(res.data.id);
  });
}
submitMap(id){
  this.listobj.forEach(ele=>{
    ele['handOver']['id']=id
  })
  this.genericService.Post("/api/handovermap/maps",this.listobj).subscribe(res=>{
    console.log("",res);
  });
}
}

