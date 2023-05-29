import { Component } from '@angular/core';
interface UserObject {
  id: number;
  nome: string;
  idade: number;
}

interface NewUserObject {
  nome: string;
  idade: number;
}

@Component({
  selector: 'app-object-mapping1',
  templateUrl: './object-mapping1.component.html',
})
export class ObjectMapping1Component {
  userList: UserObject[] = [
    { id: 1, nome: 'Liz', idade: 2 },
    { id: 2, nome: 'Thaís', idade: 32 },
    { id: 3, nome: 'Jonathan', idade: 30 },
    { id: 4, nome: 'Thainá', idade: 29 },
    { id: 5, nome: 'Fabiano', idade: 45 },
  ];
  newUserList: NewUserObject[] = [];
  newUserListString: string | null = null;

  createNewArray() {
    this.newUserList = this.userList.map((user) => ({
      nome: user.nome,
      idade: user.idade,
    }));
    this.newUserListString = JSON.stringify(this.newUserList);
  }
}
