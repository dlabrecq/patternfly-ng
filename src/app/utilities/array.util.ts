import { Injectable } from '@angular/core';

@Injectable()
export class ArrayUtil {
  flattenTree(items: any[], flattenPropertyKey: string, options: any): any[] {
    let list: any[] = [];
    const settings = {
      initNode: options.initNode || ((node: any) => { return node; }),
      uniqueIdStart: options.uniqueIdStart || 1,
      generateUniqueId: options.generateUniqueId || (() => {
        return settings.uniqueIdStart++;
      })
    };
    items.forEach((item: any) => {
      this.flattenTreeNode(item, list, flattenPropertyKey, settings);
    });
    return list;
  }

  private flattenTreeNode(node: any, list: any[], flattenPropertyKey: string, settings: any) {
    node = settings.initNode(node);
    node.id = settings.generateUniqueId();
    list.push(node);
    if (node[flattenPropertyKey]) {
      let refs: any[] = [];
      node[flattenPropertyKey].forEach((item: any) => {
        refs.push(this.flattenTreeNode(item, list, flattenPropertyKey, settings));
      });
      node[flattenPropertyKey] = refs;
    }
    return node;
  }
}
