import { Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormArray, Validators} from '@angular/forms';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { Shop } from '../../models/shop';
import { RegexPatterns } from '../../common/regexPatterns';
import { AddressModel } from '../../models/address';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  shopForm:FormGroup;
  flag :boolean;
  shop :Shop = new Shop();
  shops: Array<Shop>=[];
  RegexPatterns:RegexPatterns = new RegexPatterns();
  addresModel:AddressModel=new AddressModel();
  isCollapsed:boolean=false;
  @ViewChild('primaryModal', {static: false}) public primaryModal: ModalDirective;
  constructor() {
   }

  ngOnInit() {
    this.shops=this.getShops();
    this.shopForm = new FormGroup({
      shopName: new FormControl(null, [Validators.required, Validators.maxLength(30),Validators.pattern(this.RegexPatterns.textPattern)]),
      category: new FormControl(null, [Validators.required]),
      mobileNumber: new FormControl(null, [Validators.required,Validators.maxLength(10),Validators.pattern(this.RegexPatterns.mobilePattern)]),
      emailId: new FormControl(null, [Validators.required, Validators.pattern(this.RegexPatterns.emailPattern)]),
      city: new FormControl(null, [Validators.required,Validators.maxLength(20),Validators.pattern(this.RegexPatterns.textPattern)]),
      landmark: new FormControl(null, [Validators.required,Validators.maxLength(20)]),
      country: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      area: new FormControl(null, [Validators.required,Validators.maxLength(20)]),
      postalCode: new FormControl(null, [Validators.required, Validators.maxLength(6),Validators.pattern(this.RegexPatterns.pinCode)])
});
    
  }

  getShops():Array<Shop>{
    let shops = Array<Shop>();
    shops=[{'shopName':'Grossee','shopCategory':'abc','address':{'area':'kurla','city':'mumbai','country':'India','landmark':'mall','postalCode':'400070','state':'Maharashtra'},'mobileNumber':8652090112,'emailId':'amolsalunkhe302@gmail.com','displayAddress':'Kurla','status':'Active'},
           {'shopName':'Grossee','shopCategory':'abc','address':{'area':'kurla','city':'mumbai','country':'India','landmark':'mall','postalCode':'400070','state':'Maharashtra'},'mobileNumber':8652090112,'emailId':'amolsalunkhe302@gmail.com','displayAddress':'Kurla','status':'Active'},
           {'shopName':'Grossee','shopCategory':'abc','address':{'area':'kurla','city':'mumbai','country':'India','landmark':'mall','postalCode':'400070','state':'Maharashtra'},'mobileNumber':8652090112,'emailId':'amolsalunkhe302@gmail.com','displayAddress':'Kurla','status':'Active'},
           {'shopName':'Grossee','shopCategory':'abc','address':{'area':'kurla','city':'mumbai','country':'India','landmark':'mall','postalCode':'400070','state':'Maharashtra'},'mobileNumber':8652090112,'emailId':'amolsalunkhe302@gmail.com','displayAddress':'Kurla','status':'Active'}];
    return shops;
  }

  submitShopForm()
  {
    this.shop.shopName=this.shopForm.get('shopName').value;
    this.shop.shopCategory=this.shopForm.get('category').value;
    this.shop.mobileNumber=this.shopForm.get('mobileNumber').value;
    this.shop.emailId=this.shopForm.get('emailId').value;
    this.addresModel.city=this.shopForm.get('city').value;
    this.addresModel.landmark=this.shopForm.get('landmark').value;
    this.addresModel.country=this.shopForm.get('country').value;
    this.addresModel.state=this.shopForm.get('state').value;
    this.addresModel.area=this.shopForm.get('area').value;
    this.addresModel.postalCode=this.shopForm.get('postalCode').value;
    this.shop.address=this.addresModel;
    console.log("shop",this.shop);
  }
  updateShop(data,index){
    console.log("data",data);
    console.log("index",index);
  }
}
