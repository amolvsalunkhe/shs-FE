import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GenericService } from "../../shared/generic.service";
import { Constants } from "../../shared/constant"
import { TokenModel } from "../../models/token"

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  loginForm:FormGroup;
  token:TokenModel;
  constructor(private genericService: GenericService){
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
      loginObj["Username"]=this.loginForm.get("loginId").value;
      loginObj["password"]=this.loginForm.get("password").value;
      console.log(loginObj)
      this.genericService.login(Constants.LOGIN_URL,loginObj).subscribe(data=>{
        this.token=data.result;
        console.log(this.token)
        localStorage.setItem("tokenInfo",JSON.stringify(this.token));
        console.log(data)
        console.log(JSON.parse(localStorage.getItem("tokenInfo")))
      })
    }
  }
}
