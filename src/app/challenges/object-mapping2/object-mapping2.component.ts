import { Component } from '@angular/core';
interface UserObject {
  id: number;
  nome: string;
  idade: number;
}

@Component({
  selector: 'app-object-mapping2',
  templateUrl: './object-mapping2.component.html',
})
export class ObjectMapping2Component {
  userList: UserObject[] = [
    { id: 1, nome: 'Liz', idade: 2 },
    { id: 2, nome: 'Thaís', idade: 32 },
    { id: 3, nome: 'Jonathan', idade: 30 },
    { id: 4, nome: 'Thainá', idade: 29 },
    { id: 5, nome: 'Fabiano', idade: 45 },
  ];
  showH3: boolean = false;

  toggleH3() {
    this.showH3 = !this.showH3;
  }
}
