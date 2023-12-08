import { Injectable } from '@angular/core';
import { LoginResponseModel } from '../../UI/components/auth/models/login-response.model';
import { CryptoService } from '../services/crypto.service';


@Injectable({
    providedIn: 'root'
  })
  export class LoginResponseService {
  
    loginResponse: LoginResponseModel = new LoginResponseModel();
    constructor(
      private _crypto: CryptoService,    
    ){}
  
    getLoginResponseModel(){
      let token = localStorage.getItem("accessToken")?.toString();
      if(token != undefined){
        let loginResponseString = this._crypto.decrypt(token);    
        this.loginResponse = JSON.parse(loginResponseString);
      } 
      return this.loginResponse;
    }
  }