import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../core/models/user';
import { UserserviceService } from '../core/services/userservice.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  sortOrder = 'firstName';
  searchText: string;

  @Input() userListData: User[];
  @Output() userDataProcessed = new EventEmitter();


  constructor(
    private userSvc: UserserviceService
  ) { }


  ngOnInit() {
  }

  onuserDataProcessed(userData) {
    this.processUserAction(userData);
  }

  processUserAction(userData) {
    this.userDataProcessed.emit(userData);
  }

  onSortByFname() {
    this.sortOrder = 'firstName';
  }

  onSortByLname() {
    this.sortOrder = 'lastName';
  }

  onSortById() {
    this.sortOrder = 'employee_Id';
  }

}
