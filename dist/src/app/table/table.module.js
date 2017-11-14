var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';
import { ArrayUtil } from '../utilities/array.util';
import { TableComponent } from './table.component';
import { TableConfig } from './table-config';
export { TableConfig };
/**
 * A module containing objects associated with table components
 */
var TableModule = (function () {
    function TableModule() {
    }
    return TableModule;
}());
TableModule = __decorate([
    NgModule({
        imports: [
            AgGridModule,
            CommonModule,
            FormsModule
        ],
        declarations: [TableComponent],
        exports: [TableComponent],
        providers: [ArrayUtil]
    })
], TableModule);
export { TableModule };
//# sourceMappingURL=table.module.js.map