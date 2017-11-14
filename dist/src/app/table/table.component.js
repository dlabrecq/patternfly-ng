var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ArrayUtil } from '../utilities/array.util';
import { TableConfig } from './table-config';
import { cloneDeep, defaults, isEqual } from 'lodash';
// const flattenTree = require('flatten-tree');
/**
 * Table component.
 */
var TableComponent = (function () {
    /**
     * The default constructor
     *
     * @param el The element reference for this component
     */
    function TableComponent(arrayUtil) {
        this.arrayUtil = arrayUtil;
        /**
         * Items template
         */
        // @Input() template: TemplateRef<any>;
        /**
         * The event emitted when an action has been selected
         */
        this.onGridReady = new EventEmitter();
        this.defaultConfig = {};
        this.flattenOptions = {
            initNode: function (node) { return node; } // cloneDeep(node) avoid mutating the tree
        };
        this.flattenPropertyKey = 'children';
    }
    // Initialization
    /**
     *  Setup component configuration upon initialization
     */
    TableComponent.prototype.ngOnInit = function () {
        this.setupConfig();
    };
    /**
     *  Check if the component config has changed
     */
    TableComponent.prototype.ngDoCheck = function () {
        // Do a deep compare on config
        if (!isEqual(this.config, this.prevConfig)) {
            this.setupConfig();
        }
    };
    /**
     * Set up default config
     */
    TableComponent.prototype.setupConfig = function () {
        if (this.config !== undefined) {
            defaults(this.config, this.defaultConfig);
        }
        else {
            this.config = cloneDeep(this.defaultConfig);
        }
        this.prevConfig = cloneDeep(this.config);
        // Set filter to show visible rows
        if (this.gridOptions === undefined) {
            this.gridOptions = {};
        }
        this.gridOptions.isExternalFilterPresent = function () { return true; };
        this.gridOptions.doesExternalFilterPass = function (node) {
            // return this.gridOptions.api.getValue('isVisible', node);
            return node.data.isVisible;
        };
        // Flatten tree
        if (this.rowData !== undefined) {
            this.rowData.forEach(function (node) {
                node.isVisible = true;
            });
            this._flatRowData = this.arrayUtil.flattenTree(this.rowData, this.flattenPropertyKey, this.flattenOptions);
        }
    };
    Object.defineProperty(TableComponent.prototype, "flatRowData", {
        // Accessors
        /**
         * Returns a flattened list of items and children
         *
         * @returns {any[]}
         */
        get: function () {
            return this._flatRowData;
        },
        enumerable: true,
        configurable: true
    });
    // Actions
    TableComponent.prototype.gridReady = function ($event) {
        this.onGridReady.emit($event);
    };
    return TableComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], TableComponent.prototype, "columnDefs", void 0);
__decorate([
    Input(),
    __metadata("design:type", TableConfig)
], TableComponent.prototype, "config", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "gridOptions", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], TableComponent.prototype, "rowData", void 0);
__decorate([
    Output('onGridReady'),
    __metadata("design:type", Object)
], TableComponent.prototype, "onGridReady", void 0);
TableComponent = __decorate([
    Component({
        encapsulation: ViewEncapsulation.None,
        selector: 'pfng-table',
        template: "<ag-grid-angular class=\"ag-fresh\" style=\"width: 600px; height: 215px\" [rowData]=\"flatRowData\" [columnDefs]=\"columnDefs\" [gridOptions]=\"gridOptions\" (gridReady)=\"gridReady($event)\"></ag-grid-angular>"
    }),
    __metadata("design:paramtypes", [ArrayUtil])
], TableComponent);
export { TableComponent };
//# sourceMappingURL=table.component.js.map