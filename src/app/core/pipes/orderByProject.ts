import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project';

@Pipe({
  name: 'orderByProject',
  pure: true
})

export class OrderByProjectPipe implements PipeTransform {

  transform(value: Project[], propertyName: string): Project[] {
    if (propertyName)
      return value.sort((a: Project, b: Project) => b[propertyName].localeCompare(a[propertyName]));
    else
      return value;
  }

}