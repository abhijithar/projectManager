import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Project } from '../core/models/project';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.css']
})
export class ProjectListItemComponent implements OnInit {
  @Input() projectData: Project;
  @Output() selectedProject = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendSelectedUser(projectData) {
    this.selectedProject.emit(projectData);
  }

}
