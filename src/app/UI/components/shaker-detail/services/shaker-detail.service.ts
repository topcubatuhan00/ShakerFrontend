import { Injectable } from '@angular/core';
import { GenericHttpService } from '../../../../common/services/generic-http.service';
import { ToastrService } from 'ngx-toastr';
import { ShakerOptionsModel } from '../models/ShakerOptions.model';
import { ShakerNameModel } from '../models/ShakerName.model';
import { OldDataModel } from '../models/OldData.model';

@Injectable({
	providedIn: 'root'
})
export class ShakerDetailService {

	getApiEndpoint = "ShakerOptions/GetLastShakerOptions/";
	createApiEndpoint = "ShakerOptions/CreateShakerOptions";
	getShakerNameApiEndpoint = "Shakers/GetShakers/";
	getAllApiEndpoint = "ShakerOptions/GetAllShakerOptions/";
	
	constructor(
		private _http: GenericHttpService,
		private _toastr: ToastrService
	) { }

	getAllShakerOptions(shakerId: number, callBack: (res: ShakerOptionsModel) => void) {
        this._http.get<ShakerOptionsModel>(this.getApiEndpoint+shakerId, callBack);
    }

	getAllOptions(shakerId: number, callBack: (res: OldDataModel[]) => void) {
        this._http.get<OldDataModel[]>(this.getAllApiEndpoint+shakerId, callBack);
    }

	createShakerOptions(model: any){
		this._http.post<string>(this.createApiEndpoint, model, res => {		
			this._toastr.success("Çalkalayıcı Ayarı Başarıyla Eklendi", "Başarılı")
		})
	}

	getShakerName(id: number,callBack: (res: ShakerNameModel) => void){
		this._http.get<ShakerNameModel>(this.getShakerNameApiEndpoint+id,callBack)
	}

}
