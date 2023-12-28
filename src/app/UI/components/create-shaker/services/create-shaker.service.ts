import { Injectable } from '@angular/core';
import { GenericHttpService } from '../../../../common/services/generic-http.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})
export class CreateShakerService {

	apiEndpoint = "Shakers/CreateShakers"

	constructor(
		private _http: GenericHttpService,
		private toastr: ToastrService
	) { }

	createShaker(model: any){
		this._http.post<string>(this.apiEndpoint, model, res => {		
			this.toastr.success("Çalkalayıcı Başarıyla Eklendi", "Başarılı")
		})
	}

}
