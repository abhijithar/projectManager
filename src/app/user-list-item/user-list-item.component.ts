import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../core/models/user';
import { UserserviceService } from '../core/services/userservice.service';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  @Input() userData: User;
  @Output() userDataProcessed = new EventEmitter();

  action: string;

  constructor(
    private userSvc: UserserviceService
  ) { }

  ngOnInit() {
  }

  onDeleteUser(userData: User, id: string) {


    // Get the list of Users
    this.userSvc.removeUser(id).subscribe(
      (res:User) => {
        console.log(res);
      }
    );
    this.processUserAction(userData, 'DLT');

  }

  processUserAction(userData, action) {

    if (action === 'DLT')
      this.userDataProcessed.emit(null);
    else
      this.userDataProcessed.emit(userData);
    
  }

}
