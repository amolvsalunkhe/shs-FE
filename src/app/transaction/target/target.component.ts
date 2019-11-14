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
  users: any[];
  roles:any[];
  userForm: FormGroup;
  userTargetModel: UserTargetModel;
  role:RoleModel;
  RegexPatterns: RegexPatterns;
  isSubmitted: boolean;
  pageOfItems: Array<any>;
  en:any;

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

    this.userForm= new FormGroup({
      id:new FormControl(null),
      userName: new FormControl('0', [Validators.required,Validators.maxLength(12),Validators.pattern(this.RegexPatterns.alphaNumericUnderscorePattern)]),
      fromDate: new FormControl(new Date(), [Validators.required]),
      toDate: new FormControl(null, [Validators.required]),
      target: new FormControl(0, [Validators.required,Validators.maxLength(15)]),
      targetacheived: new FormControl(null)
    });

    this.roles=this.getRoles();
    this.users = this.getUsers();
    console.log(this.users)
  }

  getRoles()
  {
    let roles:RoleModel[]=[
      {id:0,name:"All",active:true},
      {id:1,name:"TeamLeader",active:true},
      {id:2,name:"SalesExecutive",active:true}
    ];
    return roles;
  }

  getUsers() {
    let users: UserTargetModel[] = [
      { id:1,userName:"Vaibhav1",firstName: "Vaibhav", lastName: "Ubhare",fromDate:"13-10-2019",toDate:"13-11-2019",target:"100000",targetAcheived:false },
      { id:1,userName:"Vikas1",firstName: "Vikas", lastName: "Bind",fromDate:"13-10-2019",toDate:"13-11-2019",target:"200000",targetAcheived:false },
      { id:1,userName:"Ranjit1",firstName: "Ranjit", lastName: "Patil",fromDate:"13-10-2019",toDate:"13-11-2019",target:"250000",targetAcheived:false },
      { id:1,userName:"Vishwa1",firstName: "Vishwa", lastName: "Birajdar",fromDate:"13-10-2019",toDate:"13-11-2019",target:"300000",targetAcheived:false },
      { id:1,userName:"Amit1",firstName: "Amit", lastName: "Maurya",fromDate:"13-10-2019",toDate:"13-11-2019",target:"260000",targetAcheived:false },     
    ];
    return users;
  }


  ChangingValue(val: any) {
  alert(val.target.value);
}
reset(){
  this.userForm.reset();
  this.userForm.patchValue({userName: '0',fromDate:new Date(),toDate:null,target:0});
}
submit(){
  
}
}

