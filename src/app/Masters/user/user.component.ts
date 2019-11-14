import { Component, OnInit,ViewChild } from '@angular/core';
import { UserModel } from '../../models/user';
import { AddressModel } from '../../models/address';
import { RegexPatterns } from '../../common/regexPatterns';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {GenericService} from '../../shared/generic.service'
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  @ViewChild('primaryModal', {static: false}) public primaryModal: ModalDirective;
  users: any[];
  isCollapsed: boolean = false;
  userList: any[];
  userForm: FormGroup;
  userModel: UserModel;
  addressModel:AddressModel;
  RegexPatterns:RegexPatterns;
  isSubmitted: boolean;
  en: any;

  pageOfItems: Array<any>;
  constructor(private genericService:GenericService) {
    this.userModel = new UserModel();
    this.addressModel= new AddressModel();
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
    this.userForm = new FormGroup({
      id:new FormControl(null),
      userName: new FormControl(null, [Validators.required,Validators.maxLength(12),Validators.pattern(this.RegexPatterns.alphaNumericUnderscorePattern)]),
      firstName: new FormControl(null, [Validators.required,Validators.maxLength(15),Validators.pattern(this.RegexPatterns.textPattern)]),
      lastName: new FormControl(null, [Validators.required,Validators.maxLength(15),Validators.pattern(this.RegexPatterns.textPattern)]),
      email: new FormControl(null, [Validators.required,Validators.pattern(this.RegexPatterns.emailPattern)]),
      mobileNo: new FormControl(null, [Validators.required,Validators.maxLength(10),Validators.pattern(this.RegexPatterns.mobilePattern)]),
      city: new FormControl(null, [Validators.required,Validators.maxLength(20),Validators.pattern(this.RegexPatterns.textPattern)]),
      landmark: new FormControl(null, [Validators.required,Validators.maxLength(20)]),
      country: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      area: new FormControl(null, [Validators.required,Validators.maxLength(20)]),
      dob: new FormControl("03/10/2019", [Validators.required]),
      postalCode: new FormControl(null, [Validators.required, Validators.maxLength(6),Validators.pattern(this.RegexPatterns.pinCode)])
    });

    // this.genericService.get('http://www.mocky.io/v2/5d90a5f23000005600cacf8c',{})
    // .subscribe(result => {
    //   this.userList = result.users;
    // })
    this.userList = this.getUsers();
    console.log(this.userList)
  }

  getUsers() {
    debugger;
    let userList: UserModel[];
    let users: UserModel[] = [
      { id:1,userName:"Vaibhav1",firstName: "Vaibhav", lastName: "Ubhare", email: "champuv1@gmail.com", mobileNo: 7045041905, displayAddress: "Vashi, Sector-11, 400703, Thane", status: true,
      address: {area:"Juhugaon",landmark:"Gaovdevi",state:"Maharashtra",country:"India",postalCode:"400703",city:"Vashi"},dateOfBirth:"20-06-1996" },
      { id:2,userName:"Ranjit2",firstName: "Ranjit", lastName: "Ubhare", email: "champuv2@gmail.com", mobileNo: 7045041905, displayAddress: "Vashi, Sector-11, 400703, Thane", status: true, address: {area:"Juhugaon",landmark:"Gaovdevi",state:"Maharashtra",country:"India",postalCode:"400703",city:"Vashi"},dateOfBirth:"1996/06/20" },
      { id:3,userName:"Himanshu3",firstName: "Himanshu", lastName: "Ubhare", email: "champuv3@gmail.com", mobileNo: 7045041905, displayAddress: "Vashi, Sector-11, 400703, Thane", status: true, address: {area:"Juhugaon",landmark:"Gaovdevi",state:"Maharashtra",country:"India",postalCode:"400703",city:"Vashi"},dateOfBirth:"20-06-1996" },
      { id:4,userName:"Vikas4",firstName: "Vikas", lastName: "Ubhare", email: "champuv4@gmail.com", mobileNo: 7045041905, displayAddress: "Vashi, Sector-11, 400703, Thane", status: true, address: {area:"Juhugaon",landmark:"Gaovdevi",state:"Maharashtra",country:"India",postalCode:"400703",city:"Vashi"},dateOfBirth:"20-06-1996" },
      { id:5,userName:"Vishwanath5",firstName: "Vishwanath", lastName: "Ubhare", email: "champuv5@gmail.com", mobileNo: 7045041905, displayAddress: "Vashi, Sector-11, 400703, Thane", status: true, address: {area:"Juhugaon",landmark:"Gaovdevi",state:"Maharashtra",country:"India",postalCode:"400703",city:"Vashi"},dateOfBirth:"20-06-1996" },
      { id:6,userName:"Pravin6",firstName: "Pravin", lastName: "Ubhare", email: "champuv6@gmail.com", mobileNo: 7045041905, displayAddress: "Vashi, Sector-11, 400703, Thane", status: true, address: {area:"Juhugaon",landmark:"Gaovdevi",state:"Maharashtra",country:"India",postalCode:"400703",city:"Vashi"},dateOfBirth:"20-06-1996" },
      { id:7,userName:"Mangesh7",firstName: "Mangesh", lastName: "Ubhare", email: "champuv7@gmail.com", mobileNo: 7045041905, displayAddress: "Vashi, Sector-11, 400703, Thane", status: false, address: {area:"Juhugaon",landmark:"Gaovdevi",state:"Maharashtra",country:"India",postalCode:"400703",city:"Vashi"},dateOfBirth:"20-06-1996" },
      { id:8,userName:"Satish8",firstName: "Satish", lastName: "Ubhare", email: "champuv8@gmail.com", mobileNo: 7045041905, displayAddress: "Vashi, Sector-11, 400703, Thane", status: false, address: {area:"Juhugaon",landmark:"Gaovdevi",state:"Maharashtra",country:"India",postalCode:"400703",city:"Vashi"},dateOfBirth:"20-06-1996" },
      { id:9,userName:"Shri9",firstName: "Shri", lastName: "Ubhare", email: "champuv9@gmail.com", mobileNo: 7045041905, displayAddress: "Vashi, Sector-11, 400703, Thane", status: true, address: {area:"Juhugaon",landmark:"Gaovdevi",state:"Maharashtra",country:"India",postalCode:"400703",city:"Vashi"},dateOfBirth:"20-06-1996" },
      { id:10,userName:"Amol10",firstName: "Amol", lastName: "Ubhare", email: "champuv10@gmail.com", mobileNo: 7045041905, displayAddress: "Vashi, Sector-11, 400703, Thane", status: false, address: {area:"Juhugaon",landmark:"Gaovdevi",state:"Maharashtra",country:"India",postalCode:"400703",city:"Vashi"},dateOfBirth:"20-06-1996" },
      { id:11,userName:"Vaibhav11",firstName: "Vaibhav", lastName: "Ubhare", email: "champuv1@gmail.com", mobileNo: 7045041905, displayAddress: "Vashi, Sector-11, 400703, Thane", status: true, 
      address: {area:"Juhugaon",landmark:"Gaovdevi",state:"Maharashtra",country:"India",postalCode:"400703",city:"Vashi"},dateOfBirth:"20-06-1996" },
      { id:12,userName:"Ranjit2",firstName: "Ranjit", lastName: "Ubhare", email: "champuv2@gmail.com", mobileNo: 7045041905, displayAddress: "Vashi, Sector-11, 400703, Thane", status: true, address: {area:"Juhugaon",landmark:"Gaovdevi",state:"Maharashtra",country:"India",postalCode:"400703",city:"Vashi"},dateOfBirth:"1996/06/20" },
      { id:13,userName:"Himanshu3",firstName: "Himanshu", lastName: "Ubhare", email: "champuv3@gmail.com", mobileNo: 7045041905, displayAddress: "Vashi, Sector-11, 400703, Thane", status: true, address: {area:"Juhugaon",landmark:"Gaovdevi",state:"Maharashtra",country:"India",postalCode:"400703",city:"Vashi"},dateOfBirth:"20-06-1996" },
      { id:14,userName:"Vikas4",firstName: "Vikas", lastName: "Ubhare", email: "champuv4@gmail.com", mobileNo: 7045041905, displayAddress: "Vashi, Sector-11, 400703, Thane", status: true, address: {area:"Juhugaon",landmark:"Gaovdevi",state:"Maharashtra",country:"India",postalCode:"400703",city:"Vashi"},dateOfBirth:"20-06-1996" },
      { id:15,userName:"Vishwanath5",firstName: "Vishwanath", lastName: "Ubhare", email: "champuv5@gmail.com", mobileNo: 7045041905, displayAddress: "Vashi, Sector-11, 400703, Thane", status: true, address: {area:"Juhugaon",landmark:"Gaovdevi",state:"Maharashtra",country:"India",postalCode:"400703",city:"Vashi"},dateOfBirth:"20-06-1996" },
      { id:16,userName:"Pravin6",firstName: "Pravin", lastName: "Ubhare", email: "champuv6@gmail.com", mobileNo: 7045041905, displayAddress: "Vashi, Sector-11, 400703, Thane", status: true, address: {area:"Juhugaon",landmark:"Gaovdevi",state:"Maharashtra",country:"India",postalCode:"400703",city:"Vashi"},dateOfBirth:"20-06-1996" },
      { id:17,userName:"Mangesh7",firstName: "Mangesh", lastName: "Ubhare", email: "champuv7@gmail.com", mobileNo: 7045041905, displayAddress: "Vashi, Sector-11, 400703, Thane", status: false, address: {area:"Juhugaon",landmark:"Gaovdevi",state:"Maharashtra",country:"India",postalCode:"400703",city:"Vashi"},dateOfBirth:"20-06-1996" },
      { id:18,userName:"Satish8",firstName: "Satish", lastName: "Ubhare", email: "champuv8@gmail.com", mobileNo: 7045041905, displayAddress: "Vashi, Sector-11, 400703, Thane", status: false, address: {area:"Juhugaon",landmark:"Gaovdevi",state:"Maharashtra",country:"India",postalCode:"400703",city:"Vashi"},dateOfBirth:"20-06-1996" },
      { id:19,userName:"Shri9",firstName: "Shri", lastName: "Ubhare", email: "champuv9@gmail.com", mobileNo: 7045041905, displayAddress: "Vashi, Sector-11, 400703, Thane", status: true, address: {area:"Juhugaon",landmark:"Gaovdevi",state:"Maharashtra",country:"India",postalCode:"400703",city:"Vashi"},dateOfBirth:"20-06-1996" },
      { id:20,userName:"Amol10",firstName: "Amol", lastName: "Ubhare", email: "champuv10@gmail.com", mobileNo: 7045041905, displayAddress: "Vashi, Sector-11, 400703, Thane", status: false, address: {area:"Juhugaon",landmark:"Gaovdevi",state:"Maharashtra",country:"India",postalCode:"400703",city:"Vashi"},dateOfBirth:"20-06-1996" }

    ];
    return users;
  }
  NewUser()
  {
    this.primaryModal.show();
    this.userForm.reset();
  }
  SaveUser() {
    this.userModel.id = this.userForm.get('id').value;
    this.userModel.firstName = this.userForm.get('firstName').value;
    this.userModel.lastName = this.userForm.get('lastName').value;
    this.userModel.email = this.userForm.get('email').value;
    this.userModel.mobileNo = this.userForm.get('mobileNo').value;
    this.userModel.dateOfBirth = this.userForm.get('dob').value;
    this.addressModel.area = this.userForm.get('area').value;
    this.addressModel.country = this.userForm.get('country').value;
    this.addressModel.postalCode = this.userForm.get('postalCode').value;
    this.addressModel.city = this.userForm.get('city').value;
    this.addressModel.landmark = this.userForm.get('landmark').value;
    this.addressModel.state = this.userForm.get('state').value;
    this.userModel.address=this.addressModel;
    alert(JSON.stringify(this.userModel));
  }
  EditUser(user)
  {
    debugger;
    this.userForm.patchValue({
      id:user.id,
      userName:user.userName,
      firstName:user.firstName,
      lastName:user.lastName,
      email:user.email,
      mobileNo:user.mobileNo,
      dob:new Date(user.dateOfBirth),
      area:user.address.area,
      country:user.address.country,
      postalCode:user.address.postalCode,
      city:user.address.city,
      landmark:user.address.landmark,
      state:user.address.state,

   });
  this.primaryModal.show();
  }

  ResetPage()
  {
    this.userForm.reset();
    this.isSubmitted = false;
  }
  cancel(){
    this.primaryModal.hide();
    this.userForm.reset();
    this.isSubmitted = false;
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
}
