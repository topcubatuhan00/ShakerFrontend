import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/UI/components/auth/login/login.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AuthGuard } from './app/UI/components/auth/guards/auth.guard';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

bootstrapApplication(AppComponent, {
	providers: [
		provideHttpClient(),
		importProvidersFrom(
			BrowserModule,
			SweetAlert2Module.forRoot(),
			RouterModule.forRoot([
				{
					path: "",
					loadComponent : () => import("./app/UI/components/home/home.component").then(c => c.HomeComponent),
					canActivateChild : [AuthGuard],
					// children : [
					// 	{
					// 		// buraya diğer sayfalargelecek.
					// 	}
					// ]
				},
				{
					path: "Login",
					loadComponent : () => import("./app/UI/components/auth/login/login.component").then(c => c.LoginComponent)
				}
			]), BrowserAnimationsModule		
		)
	]
})
