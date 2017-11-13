import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';

import { GridOptions } from 'ag-grid/main';

import { ArrayUtil } from '../utilities/array.util';
import { TableConfig } from './table-config';

import { cloneDeep, defaults, isEqual } from 'lodash';
// const flattenTree = require('flatten-tree');

/**
 * Table component.
 */
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'pfng-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements DoCheck, OnInit {
  /**
   * An array of items to display for table columns
   */
  @Input() columnDefs: any[];

  /**
   * The action config containing component properties
   */
  @Input() config: TableConfig;

  /**
   * An object containing table properties
   */
  @Input() gridOptions?: GridOptions;

  /**
   * An array of items to display for table rows
   */
  @Input() rowData: any[];

  /**
   * Items template
   */
  // @Input() template: TemplateRef<any>;

  /**
   * The event emitted when an action has been selected
   */
  @Output('onGridReady') onGridReady = new EventEmitter();

  private defaultConfig = {
  } as TableConfig;
  private _flatRowData: any[];
  private flattenOptions = {
    initNode: (node: any) => node // cloneDeep(node) avoid mutating the tree
  };
  private flattenPropertyKey: string = 'children';
  private prevConfig: TableConfig;

  /**
   * The default constructor
   *
   * @param el The element reference for this component
   */
  constructor(private arrayUtil: ArrayUtil) {
  }

  // Initialization

  /**
   *  Setup component configuration upon initialization
   */
  ngOnInit(): void {
    this.setupConfig();
  }

  /**
   *  Check if the component config has changed
   */
  ngDoCheck(): void {
    // Do a deep compare on config
    if (!isEqual(this.config, this.prevConfig)) {
      this.setupConfig();
    }
  }

  /**
   * Set up default config
   */
  protected setupConfig(): void {
    if (this.config !== undefined) {
      defaults(this.config, this.defaultConfig);
    } else {
      this.config = cloneDeep(this.defaultConfig);
    }
    this.prevConfig = cloneDeep(this.config);

    // Set filter to show visible rows
    if (this.gridOptions === undefined) {
      this.gridOptions = <GridOptions>{};
    }
    this.gridOptions.isExternalFilterPresent = () => { return true; };
    this.gridOptions.doesExternalFilterPass = (node) => {
      // return this.gridOptions.api.getValue('isVisible', node);
      return node.data.isVisible;
    };

    // Flatten tree
    if (this.rowData !== undefined) {
      this.rowData.forEach((node) => {
        node.isVisible = true;
      });
      this._flatRowData = this.arrayUtil.flattenTree(this.rowData, this.flattenPropertyKey, this.flattenOptions);
    }
  }

  // Accessors

  /**
   * Returns a flattened list of items and children
   *
   * @returns {any[]}
   */
  get flatRowData(): any[] {
    return this._flatRowData;
  }

  // Actions

  gridReady($event: any): void {
    this.onGridReady.emit($event);
  }

  // Private
}
