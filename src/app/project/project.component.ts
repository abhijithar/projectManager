import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { User } from '../core/models/user';
import { Project } from '../core/models/project';
import { ProjectService } from '../core/services/project.service';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  // projectForm: FormGroup;
  projectData: Project;
  projectList: Project[];
  sortOrder = 'startDate';
  searchText: string;
  setDates: false;
  userData: User;
  userList: User[];
  projectForm: FormGroup;
  newProject: Project;

  project_Id: string;
  project: string;
  startDate: Date;
  endDate: Date;
  priority: string;
  manager_Id: string;

  constructor(
    private userSvc: UserService,
    private projectSvc: ProjectService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    // Define the reactive form for user
    // this.projectForm = this.formBuilder.group({
    //   project_Id: [''],
    //   project: [''],
    //   startDate: [''],
    //   endDate: [''],
    //   priority: [''],
    //   manager_id: ['']
    // });

    // Get the list of Users
    this.getProjects();

    // Get the list of Users
    this.getUsers();

  }

  getProjects() {

    // Get the list of Users
    this.projectSvc.getProject().subscribe(
      (res: Project[]) => {
        this.projectList = res;
      }
    );

  }

  getUsers() {

    // Get the list of Users
    this.userSvc.getUser().subscribe(
      (res: User[]) => {
        this.userList = res;
      }
    );

  }


  onSortByStartDate() {
    this.sortOrder = 'startDate';
  }

  onSortByEndDate() {
    this.sortOrder = 'endDate';
  }

  onSortByPriority() {
    this.sortOrder = 'priority';
  }

  onSortByCompleted() {
    this.sortOrder = 'completed';
  }

  onUserSelected(user: User) {
    this.manager_Id = user.employee_Id;
  }

  onAddProject() {
    this.newProject = new Project('', this.project, this.startDate, this.endDate, this.priority, this.manager_Id); 

    // Invoke the addUser service method for adding the user details
    this.projectSvc.addProject(this.newProject).subscribe(
      (res: any) => {
        console.log('Project Added');
      }
    );

    this.getProjects();

  }

  onProjectSelected(projectData: Project) {
    this.project = projectData.project;
    this.startDate = new Date(projectData.startDate);

    // this.startDate = projectData.startDate;
    this.endDate = projectData.endDate;
    this.priority = projectData.priority;
    this.manager_Id = projectData.manager_id;
  }


}
