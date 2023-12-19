import { Component } from '@angular/core';
import { HomeService } from './services/home.service';
import { ShakerModel } from './models/shaker.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent {

	constructor(
		private _homeService: HomeService,
		private _router: Router
		) { }
	
	shakerResponse: ShakerModel[] = [];

	ngOnInit(): void {
		this._homeService.getAllShakers((shakerResponse: ShakerModel[]) => {
			console.log(shakerResponse);
			
			this.shakerResponse = shakerResponse;
		});
	}

	addShaker(){
		this._router.navigateByUrl("/CreateShaker");
	}

}
