import { Pipe, PipeTransform } from '@angular/core';
interface User {
  name: string;
  age: number;
}
@Pipe({
  name: 'isAdult',
  standalone: true,
  pure: false
})
export class IsAdultPipe implements PipeTransform {
  transform(arr: User[]): User[] {
    return arr.filter((x) => x.age > 18);
  }
}
