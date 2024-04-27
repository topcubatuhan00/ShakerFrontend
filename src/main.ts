import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AuthGuard } from './app/UI/components/auth/guards/auth.guard';
import { ToastrModule } from 'ngx-toastr';

bootstrapApplication(AppComponent, {
	providers: [
		provideHttpClient(),
		importProvidersFrom(
			BrowserModule,
			RouterModule.forRoot([
				{
					path: "",
					loadComponent: () => import("./app/UI/components/layout/layout.component").then(c => c.LayoutComponent),
					canActivateChild: [AuthGuard],
					children: [

						{
							path: "",
							loadComponent: () => import("./app/UI/components/home/home.component").then(c => c.HomeComponent)
						},
						{
							path: "CreateShaker",
							loadComponent: () => import("./app/UI/components/create-shaker/create-shaker.component").then(c => c.CreateShakerComponent)
						},
						{
							path: "ShakerDetail/:id",
							loadComponent: () => import("./app/UI/components/shaker-detail/shaker-detail.component").then(c => c.ShakerDetailComponent)
						}

					]
				},
				{
					path: "Login",
					loadComponent: () => import("./app/UI/components/auth/login/login.component").then(c => c.LoginComponent)
				},
				{
					path: "Register",
					loadComponent: () => import("./app/UI/components/auth/register/register.component").then(c => c.RegisterComponent)
				}
			]),
			BrowserAnimationsModule,
			ToastrModule.forRoot(),
		)
	]
})
