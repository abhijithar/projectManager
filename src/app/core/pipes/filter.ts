import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {

    transform(users: User[], searchText: string): User[] {

        if (!users || !searchText) return users;

        return users.filter(user => {
            return user.firstName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
        });

    }

}