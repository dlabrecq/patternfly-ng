import { DoCheck, EventEmitter, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid/main';
import { ArrayUtil } from '../utilities/array.util';
import { TableConfig } from './table-config';
/**
 * Table component.
 */
export declare class TableComponent implements DoCheck, OnInit {
    private arrayUtil;
    /**
     * An array of items to display for table columns
     */
    columnDefs: any[];
    /**
     * The action config containing component properties
     */
    config: TableConfig;
    /**
     * An object containing table properties
     */
    gridOptions?: GridOptions;
    /**
     * An array of items to display for table rows
     */
    rowData: any[];
    /**
     * Items template
     */
    /**
     * The event emitted when an action has been selected
     */
    onGridReady: EventEmitter<{}>;
    private defaultConfig;
    private _flatRowData;
    private flattenOptions;
    private flattenPropertyKey;
    private prevConfig;
    /**
     * The default constructor
     *
     * @param el The element reference for this component
     */
    constructor(arrayUtil: ArrayUtil);
    /**
     *  Setup component configuration upon initialization
     */
    ngOnInit(): void;
    /**
     *  Check if the component config has changed
     */
    ngDoCheck(): void;
    /**
     * Set up default config
     */
    protected setupConfig(): void;
    /**
     * Returns a flattened list of items and children
     *
     * @returns {any[]}
     */
    readonly flatRowData: any[];
    gridReady($event: any): void;
}
