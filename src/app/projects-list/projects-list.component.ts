import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-projects-list',
	templateUrl: './projects-list.component.html',
	styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
	headings: object;

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
	}

}
