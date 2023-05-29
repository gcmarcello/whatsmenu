import { Component } from '@angular/core';
interface DynamicObject {
  [key: string]: any;
}
@Component({
  selector: 'app-object-filter',
  templateUrl: './object-filter.component.html',
})
export class ObjectFilterComponent {
  objectList: DynamicObject = {
    jason: 'Jason',
    thais: 'Thaís',
    liz: 'Liz',
    jennei: 'Jennei',
    jenyffer: 'Jennyfer',
    joao: 'João',
    bola: 'Bola',
    gato: 'Gato',
    jaguar: 'Jaguar',
  };
  newObjectList: DynamicObject = {};
  newObjectListString: string | null = null;

  excludeKeys(letter: string) {
    if (!letter) {
      this.newObjectListString = JSON.stringify(this.objectList);
    }
    this.newObjectList = this.objectList;
    for (const property in this.newObjectList) {
      if (
        this.newObjectList.hasOwnProperty(property) &&
        property.startsWith(letter)
      ) {
        delete this.objectList[property];
      }
    }
    this.newObjectListString = JSON.stringify(this.newObjectList);
  }
}
