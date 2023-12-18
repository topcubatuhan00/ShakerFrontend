import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [],

	templateUrl: './header.component.html',
	styleUrl: './header.component.css'
})
export class HeaderComponent {

	constructor(
		private _toastr: ToastrService,
		private _router: Router
		){}

	quit(){
		localStorage.removeItem("accessToken");
		this._router.navigateByUrl("/Login");
		this._toastr.success("Çıkış İşlemi Başarılı", "Başarılı!")
	}
}	
