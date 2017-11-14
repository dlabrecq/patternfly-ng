import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { MakeComponent } from './make.component';
import { PriceComponent } from './price.component';
import { TableConfig } from '../../table/table-config';

import { cloneDeep } from 'lodash';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'table-example',
  templateUrl: './table-example.component.html'
})
export class TableExampleComponent implements OnInit {
  actionsText: string = '';
  columnDefs: any[];
  rowData: any[];
  tableConfig: TableConfig;

  constructor() {
  }

  ngOnInit(): void {
    this.columnDefs = [
      {headerName: 'Make', field: 'make', cellRendererFramework: MakeComponent},
      {headerName: 'Model', field: 'model'},
      {headerName: 'Price', field: 'price', cellRendererFramework: PriceComponent}
    ];

    this.rowData = [{
      id: '1',
      make: 'Toyota',
      model: 'Celica, Camry, Prius',
      price: '31000-33000',
      children: [{
        id: '1a',
        make: 'Toyota',
        model: 'Celica',
        price: '31000'
      }, {
        id: '1b',
        make: 'Toyota',
        model: 'Camry',
        price: '32000'
      }, {
        id: '1c',
        make: 'Toyota',
        model: 'Prius',
        price: '33000'
      }]
    }, {
      id: '2',
      make: 'Ford',
      model: 'F-150, Focus, Mustang',
      price: '41000-43000',
      children: [{
        id: '2a',
        make: 'Ford',
        model: 'F-150',
        price: '41000'
      }, {
        id: '2b',
        make: 'Ford',
        model: 'Focus',
        price: '42000'
      }, {
        id: '2c',
        make: 'Ford',
        model: 'Mustang',
        price: '43000'
      }]
    }, {
      id: '3',
      make: 'Porsche',
      model: '911, Cayman, Boxster',
      price: '51000-53000',
      children: [{
        id: '3a',
        make: 'Porsche',
        model: '911',
        price: '51000'
      }, {
        id: '3b',
        make: 'Porsche',
        model: 'Cayman',
        price: '52000'
      }, {
        id: '3c',
        make: 'Porsche',
        model: 'Boxster',
        price: '53000'
      }]
    }];

    this.tableConfig = {

    } as TableConfig;
  }

  // Actions

}
