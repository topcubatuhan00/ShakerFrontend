import { Component } from '@angular/core';
import { HomeService } from './services/home.service';
import { ShakerModel } from './models/shaker.model';
import { Router } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [MatExpansionModule, FormsModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent {

	constructor(
		private _homeService: HomeService,
		private _router: Router
	) { }

	shakerResponse: ShakerModel[] = [];
	filterResponse: ShakerModel[] = [];
	panelOpenState = false;
	isOnlyActive: string = "0";

	ngOnInit(): void {
		this._homeService.getAllShakers((shakerResponse: ShakerModel[]) => {
			this.shakerResponse = shakerResponse;
			this.filterResponse = shakerResponse;
		});
	}

	addShaker() {
		this._router.navigateByUrl("/CreateShaker");
	}

	deleteShaker(shakerId: number) {
		this._homeService.deleteShaker(shakerId);
	}

	routeDetail(id: number){
		this._router.navigateByUrl("/ShakerDetail/" + id);
	}

	filterResult() {
		this.shakerResponse = this.filterResponse;
		switch (this.isOnlyActive) {
			case "1":
				console.log("çalışanı listele");
				this.shakerResponse = this.shakerResponse.filter(shaker => shaker.status === true);
				this.panelOpenState = false;
				break;
			case "2":
				console.log("duranı listele");
				this.shakerResponse = this.shakerResponse.filter(shaker => shaker.status === false);
				this.panelOpenState = false;
				break;
			default:
				console.log("karışık listele");
				this.panelOpenState = false;
				break;
		}
		
	}
}
