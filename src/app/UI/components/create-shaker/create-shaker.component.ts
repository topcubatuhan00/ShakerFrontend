import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateShakerService } from './services/create-shaker.service';

@Component({
	selector: 'app-create-shaker',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './create-shaker.component.html',
	styleUrl: './create-shaker.component.css'
})
export class CreateShakerComponent {

	status: boolean = false;
	shakerOptionsId: number = 0;
	shakerName = new FormControl('', [Validators.required]);
	buildingName = new FormControl('', [Validators.required]);
	roomName = new FormControl('', [Validators.required]);
	floorCount = new FormControl(0, [Validators.required]);

	constructor(
		private _router: Router,
		private _createShakerService: CreateShakerService,
	){}

	backPage(){
		this._router.navigateByUrl("")
	}

	createShaker(event: Event){
		event.preventDefault();

		let obj = {
			shakerName: this.shakerName.value,
			buildingName: this.buildingName.value,
			floorCount: this.floorCount.value,
			roomName: this.roomName.value,
			shakerOptionsId: this.shakerOptionsId,
			status: this.status
		}
		
		this._createShakerService.createShaker(obj);

	}

}
