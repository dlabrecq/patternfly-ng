import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    CommonModule,
    FormsModule
  ],
  declarations: [TableComponent],
  exports: [TableComponent]
})
export class TableModule {}
