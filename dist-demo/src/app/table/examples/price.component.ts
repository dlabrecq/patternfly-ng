import {
  Component,
  ViewEncapsulation
} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'price',
  templateUrl: './price.component.html'
})
export class PriceComponent {
  params: any;

  agInit(params: any): void {
    this.params = params;
  }
}
