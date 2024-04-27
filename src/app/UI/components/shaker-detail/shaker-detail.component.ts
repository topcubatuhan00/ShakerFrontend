import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-shaker-detail',
	standalone: true,
	imports: [],
	templateUrl: './shaker-detail.component.html',
	styleUrl: './shaker-detail.component.css'
})
export class ShakerDetailComponent {
	
	shakerId: string = "";
	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.shakerId = params['id'];
			console.log(this.shakerId);
		});
	}

}
