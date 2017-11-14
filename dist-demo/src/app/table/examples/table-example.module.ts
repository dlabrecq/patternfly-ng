import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular/main';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule, TabsetConfig } from 'ngx-bootstrap/tabs';

import { MakeComponent } from './make.component';
import { PriceComponent } from './price.component';
import { TableExampleComponent } from './table-example.component';
import { TableModule } from '../table.module';
import { DemoComponentsModule } from '../../../demo/components/demo-components.module';

@NgModule({
  declarations: [MakeComponent, PriceComponent, TableExampleComponent],
  imports: [
    AgGridModule.withComponents([MakeComponent, PriceComponent]),
    TableModule,
    BsDropdownModule.forRoot(),
    CommonModule,
    DemoComponentsModule,
    TabsModule.forRoot()
  ],
  providers: [BsDropdownConfig, TabsetConfig]
})
export class TableExampleModule {
  constructor() {}
}
