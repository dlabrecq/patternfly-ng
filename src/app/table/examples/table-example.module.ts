import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule, TabsetConfig } from 'ngx-bootstrap/tabs';

import { TableExampleComponent } from './table-example.component';
import { TableModule } from '../table.module';
import { DemoComponentsModule } from '../../../demo/components/demo-components.module';

@NgModule({
  declarations: [TableExampleComponent],
  imports: [
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
