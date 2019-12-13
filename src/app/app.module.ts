import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { OrderByPipe } from './core/pipes/orderBy';
import { FilterPipe } from './core/pipes/filter';
import { OrderByProjectPipe } from './core/pipes/orderByProject';
import { FilterProjectPipe } from './core/pipes/filterProject';

import { ProjectComponent } from './project/project.component';
import { ProjectListItemComponent } from './project-list-item/project-list-item.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { AppModalComponent } from './app-modal/app-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListItemComponent,
    UserListComponent,
    OrderByPipe,
    FilterPipe,
    OrderByProjectPipe,
    FilterProjectPipe,
    ProjectComponent,
    ProjectListItemComponent,
    UserSearchComponent,
    AppModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[UserSearchComponent]
})
export class AppModule { }
