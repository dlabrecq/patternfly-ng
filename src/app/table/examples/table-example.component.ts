import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { TableConfig } from '../../table/table-config';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'table-example',
  templateUrl: './table-example.component.html'
})
export class TableExampleComponent implements OnInit {
  tableConfig: TableConfig;
  actionsText: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.tableConfig = {

    } as TableConfig;
  }

  // Actions

}
