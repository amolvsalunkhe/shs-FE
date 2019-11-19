import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, FormArray, Validators} from '@angular/forms';
import { Product } from '../../models/product'
import {ModalDirective} from 'ngx-bootstrap/modal';
import { GenericService } from '../../shared/generic.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @ViewChild('primaryModal', {static: false}) public primaryModal: ModalDirective;
  productForm:FormGroup;
  product:Product;
  isSubmitted:boolean=false;
  products:any=[];
  isCollapsed: boolean = false;
  rowCount:number=5;
  pageNo:1;
  constructor(private genericService: GenericService) {  }

  ngOnInit() {
    this.genericService.get('http://www.mocky.io/v2/5d94553d2f00002b008ff654')
    .subscribe(result => {
      console.log(result)
      this.products = result.products;
    })
    //this.products = this.getDummyProducts();
    this.productForm = new FormGroup({
            id: new FormControl(null),
            productName: new FormControl(null, [Validators.required, Validators.maxLength(30)]),
            category: new FormControl(null, [Validators.required]),
            quantity: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]+$")]),
            price: new FormControl(null, [Validators.required, Validators.pattern("^([0-9]+|([0-9]+.[0-9]+))$")]),
            discount: new FormControl(null, [Validators.required, Validators.pattern("^([0-9]?[0-9])|[0]+$")]),
            gst: new FormControl(null, [Validators.required, Validators.pattern("^([0-9]?[0-9])|[0]+$")])
      });
  }
  getDummyProducts(){
    let products = [
      {productName:'MI Note 4', category:'Mobile Phones', quantity:10, price:10000.0, discount:20, gst:18},
      {productName:'OPPO 7', category:'Mobile Phones', quantity:10, price:10000.0, discount:20, gst:18},
      {productName:'1 Plus 6T', category:'Mobile Phones', quantity:10, price:40000.0, discount:20, gst:18},
      {productName:'iPhone 7', category:'Mobile Phones', quantity:10, price:50000.0, discount:20, gst:18},
      {productName:'Samsung', category:'Mobile Phones', quantity:10, price:5000.0, discount:20, gst:18}
    ];
    return products;
  }

  submit(){
    this.product = new Product();
    let prods = this.products;
    this.isSubmitted=true;
    console.log(this.productForm);
    if(this.productForm.valid){
      this.product.id=this.productForm.get('id').value
      this.product.productName = this.productForm.get('productName').value;
      this.product.category = this.productForm.get('category').value;
      this.product.quantity = this.productForm.get('quantity').value;
      this.product.price = this.productForm.get('price').value;
      this.product.discount = this.productForm.get('discount').value;
      this.product.gst = this.productForm.get('gst').value;
      console.log(this.product)
      if(this.product.id){
        this.update(this.product);
      }else{
        this.create(this.product);
      }
      // prods.push(this.product);
      // this.products = prods;
      this.productForm.reset();
      this.primaryModal.hide();
    }
  }
  edit(product){
    this.productForm.patchValue({
                                   id:product.id,
                                   productName:product.productName,
                                   category:product.category,
                                   quantity:product.quantity,
                                   price:product.price,
                                   discount: product.discount,
                                   gst: product.gst
                                });
    this.primaryModal.show();
  }

  create(product){
    console.log("create : ", product);
  }

  update(product){
    console.log("update : ", product);
  }
  reset(){
    this.productForm.reset();
    this.isSubmitted = false;
  }

  cancel(){
    this.primaryModal.hide();
    this.productForm.reset();
    this.isSubmitted = false;
  }

  delete(){

  }
}
