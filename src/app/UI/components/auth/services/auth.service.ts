import { Injectable } from '@angular/core';
import { GenericHttpService } from '../../../../common/services/generic-http.service';
import { Router } from '@angular/router';
import { CryptoService } from '../../../../common/services/crypto.service';
import { LoginResponseModel } from '../models/login-response.model';


@Injectable({
	providedIn: 'root'
})
export class AuthService {

	apiEndpoint = "Auth/Login";

	constructor(
		private _http: GenericHttpService,
		private _router: Router,
		private _crypto: CryptoService
	) { }

	login(model: any) {
		this._http.post<LoginResponseModel>(this.apiEndpoint, model, res => {
			this._crypto.getDecodedAccessToken(res.token);

			localStorage.setItem("accessToken", res.token);
			this._router.navigateByUrl("/");
		})
	}

}