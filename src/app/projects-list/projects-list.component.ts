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
			label: "Name"
		},
		{
			label: "Source code"
		},
		{
			label: "Demo"
		},
		{
			label: "Description"
		}
		];

		this.listings = [
		{
			name: "Purchasing app",
			source: "https://github.com/anefsky/penguin",
			hosted: "http://andrewnefsky.com/projects/penguin",
			description: "Internal business application use for coordinating pricing between bidders and buyers.  Uses angular, scss, bootstrap."
		},
		{
			name: "Ecommerce app",
			source: "https://github.com/anefsky/catalogue_page",
			hosted: "http://andrewnefsky.com/projects/catalogue_page",
			description: "Prototype for single page ecommerce app.  Uses angular, scss."
		},
		{
			name: "Time sheet header",
			source: "https://github.com/anefsky/virtusa",
			hosted: "http://andrewnefsky.com/projects/virtusa",
			description: "Partial view of timesheet application.  Uses angular, scss, font-awesome."
		}
		];
	}

}
