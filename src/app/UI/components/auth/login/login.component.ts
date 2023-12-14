import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [
		CommonModule, 
		RouterModule, 
		FormsModule,
		MatButtonModule, 
		MatDividerModule, 
		MatIconModule, 
		MatFormFieldModule, 
		MatInputModule, 
		ReactiveFormsModule
	],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css'
})
export class LoginComponent {

	constructor(private _auth: AuthService) {}

	userName = new FormControl('', [Validators.required]);
	password = new FormControl('', [Validators.required]);

	login(){
		let obj = {
			userName: this.userName.value,
			password: this.password.value
		}

		this._auth.login(obj);
	}
}
