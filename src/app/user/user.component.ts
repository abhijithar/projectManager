import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


import { UserService } from '../core/services/user.service';
import { User } from '../core/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  userForm: FormGroup;
  userData: User;
  userList: User[];
  updateBtn: boolean;
 
  constructor(
    private userSvc: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.updateBtn = false;
    
    // Define the reactive form for user
    this.userForm = this.formBuilder.group({
      user_Id: [''],
      firstName: [''],
      lastName: [''],
      employee_Id: [''],
      project_Id: [''],
      task_Id: ['']
    });

    // Get the list of Users
    this.getUsers();

  }

  onAddUser() {

    // Assign the model from the form values
    this.userData = this.userForm.value;

    // Invoke the addUser service method for adding the user details
    this.userSvc.addUser(this.userData).subscribe(
      (res: any) => {
        console.log('User Added');
        console.log(res);
        this.userForm.reset();
      }
    );

    // Get the list of Users
    this.getUsers();

  }

  getUsers() {

    // Get the list of Users
    this.userSvc.getUser().subscribe(
      (res: User[]) => {
        this.userList = res;
      }
    );

  }
 
  onuserDataProcessed(userData) {

    if (userData !== null) {

      console.log(userData);
      this.userForm.patchValue({
        employee_Id: userData.employee_Id,
        firstName: userData.firstName, 
        lastName: userData.lastName      
      });
      this.updateBtn = true;

    } else {
    
    // Get the list of Users
    this.getUsers();
    this.updateBtn = false;

    }

  }

}
