import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-register',
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
	templateUrl: './register.component.html',
	styleUrl: './register.component.css'
})
export class RegisterComponent {
	constructor(private _auth: AuthService) { }

	name = new FormControl('', [Validators.required]);
	lastName = new FormControl('', [Validators.required]);
	userName = new FormControl('', [Validators.required]);
	email = new FormControl('', [Validators.required]);
	password = new FormControl('', [Validators.required]);

	register() {
		let obj = {
			name: this.userName.value,
			lastName: this.password.value,
			userName: this.password.value,
			email: this.password.value,
			password: this.password.value
		}

		this._auth.register(obj);
	}
}
