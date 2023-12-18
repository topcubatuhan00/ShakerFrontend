import { Component } from '@angular/core';
import { HomeService } from './services/home.service';
import { ShakerModel } from './models/shaker.model';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [],
templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent {

	constructor(private _homeService: HomeService) {}

	ngOnInit(): void {
		this._homeService.getAllShakers((shakerResponse: ShakerModel[]) => {
		  console.log('Shaker verileri:', shakerResponse);
		});
	  }

}
