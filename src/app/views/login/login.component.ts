import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GenericService } from "../../shared/generic.service";
import { Constants } from "../../shared/constant"
import { TokenModel } from "../../models/token"
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  loginForm:FormGroup;
  token:TokenModel;
  constructor(private genericService: GenericService,private router: Router){
    console.log(Constants.LOGIN_URL)
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
       loginId: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(100)])),
       password: new FormControl('', Validators.compose([Validators.required]))
   });
  }

  login(){
    if(this.loginForm.valid){
      let loginObj={};
      loginObj["name"]=this.loginForm.get("loginId").value;
      loginObj["password"]=this.loginForm.get("password").value;
      console.log(loginObj)
      this.genericService.login(Constants.LOGIN_URL,loginObj).subscribe(data=>{
        localStorage.setItem("shsUser",JSON.stringify({"id":data}));
        this.router.navigate(['/transaction/form']);
      })
    }
  }
}
