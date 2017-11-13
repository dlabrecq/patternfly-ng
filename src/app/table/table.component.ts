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

import { TableConfig } from './table-config';

import { cloneDeep, defaults, isEqual } from 'lodash';

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
   * The action config containing component properties
   */
  @Input() config: TableConfig;

  /**
   * Items template
   */
  @Input() template: TemplateRef<any>;

  /**
   * The event emitted when an action has been selected
   */
  @Output('onActionSelect') onActionSelect = new EventEmitter();

  private defaultConfig = {
  } as TableConfig;
  private prevConfig: TableConfig;

  /**
   * The default constructor
   *
   * @param el The element reference for this component
   */
  constructor() {
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
  }

  // Private

}
