import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShakerOptionsModel } from './models/ShakerOptions.model';
import { ShakerDetailService } from './services/shaker-detail.service';
import { ShakerNameModel } from './models/ShakerName.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { OldDataModel } from './models/OldData.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
@Component({
	selector: 'app-shaker-detail',
	standalone: true,
	imports: [MatExpansionModule, MatTableModule],
	templateUrl: './shaker-detail.component.html',
	styleUrl: './shaker-detail.component.css'
})


export class ShakerDetailComponent {
	panelOpenState = false;
	displayedColumns: string[] = ['position', 'date', 'time'];
	shakerId: string = "";
	shakerNameModel: ShakerNameModel = new ShakerNameModel();
	constructor(
		private route: ActivatedRoute,
		private _service: ShakerDetailService,
		private _toastr: ToastrService
	) { }
	shakerOptionsResponse: ShakerOptionsModel = new ShakerOptionsModel();
	oldDataResponse: OldDataModel[] = [];
	isDataAvailable: boolean = false;
	timer: number = 0;
	dataSource = new MatTableDataSource<TableElements>(this.oldDataResponse);

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.shakerId = params['id'];
		});

		this._service.getShakerName(parseInt(this.shakerId), (shakerNameModel: ShakerNameModel) => {
			this.shakerNameModel = shakerNameModel;
		})

		this._service.getAllShakerOptions(parseInt(this.shakerId), (shakerOptionsResponse: ShakerOptionsModel) => {
			this.shakerOptionsResponse = shakerOptionsResponse;
			if (typeof (shakerOptionsResponse) === 'object') {
				this.isDataAvailable = true;
			}
			this.startTimer(this.shakerOptionsResponse.runningTime)
		});

		this._service.getAllOptions(parseInt(this.shakerId), (response: OldDataModel[]) => {
			this.oldDataResponse = response;
		});

	}

	getTime(time: Date) {
		const now = new Date();
		const timeConverted = new Date(time);
		const difference = timeConverted.getTime() - now.getTime();

		const days = Math.floor(difference / (1000 * 60 * 60 * 24));
		const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((difference % (1000 * 60)) / 1000);

		let text = ``;

		if (days > 0) text += `${days} gün, `
		if (hours > 0) text += `${hours} saat, `
		if (minutes > 0) text += `${minutes} dakika, `
		if (seconds > 0) text += `${seconds} saniye kaldı`

		return text;
	}

	startTimer(time: number) {
		this.timer = time * 60;
		const interval = setInterval(() => {
			this.timer--;
			if (this.timer === 0) {
				clearInterval(interval);
				this._toastr.success("Çalkalayıcı süresi doldu", "Başarılı")
				setTimeout(() => {
					window.location.reload();
				}, 1000);
			}
		}, 1000);
	}

	calculateTime(time: number) {
		if (this.timer % 60 === 0) {
			return `${this.timer / 60 + ":00"}`
		} else {
			let dk = time / 60
			let convertDK = dk.toString().split(".")[0]
			let sn = time - parseInt(convertDK) * 60
			let res = `${convertDK}:${sn}`
			return res
		}
	}

	runNow() {
		let date = new Date();
		date.setDate(date.getDate() + 1);
		const obj = {
			runningTime: 0,
			isStoped: false,
			stopedTime: date,
			shakerId: this.shakerId
		}

		this._service.createShakerOptions(obj);
		setTimeout(() => {
			window.location.reload();
		}, 1000);
	}

	runWithTime(value: string) {
		const obj = {
			runningTime: parseInt(value),
			isStoped: false,
			stopedTime: new Date(),
			shakerId: this.shakerId
		}

		this._service.createShakerOptions(obj);
		setTimeout(() => {
			window.location.reload();
		}, 1000);
	}

}

export interface TableElements {
	stopedTime: Date;
	runningTime: number;
}