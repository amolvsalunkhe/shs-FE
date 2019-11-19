import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  public isAuthenticated(): boolean {
    let gtCrickUser = JSON.parse(localStorage.getItem('shsUser'));
    if(gtCrickUser){
      
      if(gtCrickUser.id)
        { return true;}
      else
        { return false;}
    }else{
      return false;
    }
  }
}
