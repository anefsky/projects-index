import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-projects-list',
	templateUrl: './projects-list.component.html',
	styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
	headings: Array<object>;
	listings: Array<object>;

	constructor() { 
	}

	ngOnInit() {
		this.headings = [
		{
			label: "name"
		},
		{
			label: "source"
		},
		{
			label: "hosted"
		},
		{
			label: "description"
		}
		];

		this.listings = [
		{
			name: "Purchasing app",
			source: "",
			hosted: "",
			description: "Angular 1.x, scss, bootstrap"
		},
		{
			name: "Ecommerce app",
			source: "",
			hosted: "",
			description: "Angular 1.x, scss, bootstrap"
		}
		];
	}

}
