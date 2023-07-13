import { Component } from '@angular/core';


interface Item {
  position: number;
  name: string;
  cost: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showList:boolean = true;

  displayedColumns: string[] = ['position', 'name', 'cost'];

  items:Item[] = [
    { position: 1, name: 'Producto 1', cost: '$10' },
    { position: 2, name: 'Producto 2', cost: '$20' },
    { position: 3, name: 'Producto 3', cost: '$30' },
    { position: 4, name: 'Producto 4', cost: '$40' },
    { position: 5, name: 'Producto 5', cost: '$50' },
  ];

  // funcion mostrar/ocultar lista
  toggleList() {
    this.showList = !this.showList;
  };


}
