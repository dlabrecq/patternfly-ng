import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular/main';

import { ArrayUtil } from '../utilities/array.util';
import { TableComponent } from './table.component';
import { TableConfig } from './table-config';

export {
  TableConfig
};

/**
 * A module containing objects associated with table components
 */
@NgModule({
  imports: [
    AgGridModule,
    CommonModule,
    FormsModule
  ],
  declarations: [TableComponent],
  exports: [TableComponent],
  providers: [ArrayUtil]
})
export class TableModule {}
