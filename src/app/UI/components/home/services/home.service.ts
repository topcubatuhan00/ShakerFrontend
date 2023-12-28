import { Injectable } from '@angular/core';
import { GenericHttpService } from '../../../../common/services/generic-http.service';
import { ShakerModel } from '../models/shaker.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class HomeService {

	getAllApiEndpoint = "Shakers/GetAllShakers";
	deleteApiEndpoint = "Shakers/DeleteShaker";
	constructor(
		private _http: GenericHttpService,
		private _toastr: ToastrService
	) { }

	getAllShakers(callBack: (res: ShakerModel[]) => void) {
        this._http.get<ShakerModel[]>(this.getAllApiEndpoint, callBack);
    }

	deleteShaker(shakerId: number): any{		
		this._http.get<any>(`${this.deleteApiEndpoint}/${shakerId}`, res => {
			if(res.succes){
				this._toastr.success("Çalkalayıcı Başarıyla Kaldırıldı.","Başarılı");
				return res;
			}else{
				this._toastr.warning("Çalkalayıcı Kaldırılamadı.","Hata!");
			}
			
		});
	}
}
