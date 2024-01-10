import { Injectable } from '@angular/core';
import { GenericHttpService } from '../../../../common/services/generic-http.service';
import { Router } from '@angular/router';
import { CryptoService } from '../../../../common/services/crypto.service';
import { LoginResponseModel } from '../models/login-response.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	apiLoginEndpoint = "Auth/Login";
	apiRegisterEndpoint = "Auth/Register";

	constructor(
		private _http: GenericHttpService,
		private _router: Router,
		private _crypto: CryptoService,
		private toastr: ToastrService
	) { }

	login(model: any) {
		this._http.post<LoginResponseModel>(this.apiLoginEndpoint, model, res => {
			if (res.token !== undefined) {
				// this._crypto.getDecodedAccessToken(res.token);
				localStorage.setItem("accessToken", res.token);
				this.toastr.success("Giriş Başarılı", "Başarılı")
				this._router.navigateByUrl("/");
				return;
			}
			this.toastr.error("Kullanıcı adı veya parola yanlış...", "Hata")
			return;
		})
	}

	register(model: any) {
		this._http.post<LoginResponseModel>(this.apiRegisterEndpoint, model, res => {		
			if (res.token !== undefined) {
				localStorage.setItem("accessToken", res.token);
				this.toastr.success("Kullanıcı Başarıyla Kayıt Oldu", "Başarılı")
				this._router.navigateByUrl("/");
				return;
			}
			this.toastr.error("Kayıt Sırasında Bir Hata Oluştu", "Hata")
			return;
		})
	}

}