import { Injectable } from '@angular/core';
import { GenericHttpService } from '../../../../common/services/generic-http.service';
import { ShakerModel } from '../models/shaker.model';

@Injectable({
	providedIn: 'root'
})
export class HomeService {

	getAllApiEndpoint = "Shakers/GetAllShakers";
	constructor(
		private _http: GenericHttpService,
	) { }

	getAllShakers(callBack: (res: ShakerModel[]) => void) {
        this._http.get<ShakerModel[]>(this.getAllApiEndpoint, callBack);
    }
}
