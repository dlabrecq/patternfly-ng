import {
  Component,
  ViewEncapsulation
} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'make',
  templateUrl: './make.component.html'
})
export class MakeComponent {
  params: any;

  agInit(params: any): void {
    this.params = params;
  }

  toggleChildNode($event: MouseEvent): void {
    if (this.params.data !== undefined && this.params.data.children !== undefined) {
      let expanded = !this.params.data.expanded;
      this.params.data.expanded = expanded;
      this.params.data.children.forEach((item: any) => {
        item.isVisible = (item.isVisible !== undefined) ? expanded : true;
      });
      this.params.api.onFilterChanged();
    }
  }
}
