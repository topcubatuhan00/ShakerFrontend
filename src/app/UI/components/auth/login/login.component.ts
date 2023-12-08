import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidInputDirective } from '../../../../common/directives/valid-input.directive';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ValidInputDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

	constructor(private _auth: AuthService) {
		console.log("burada");
		
	}

	login(form : NgForm){
		if (form.valid){
			this._auth.login(form.value);
		}
	}

}
