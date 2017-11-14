var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var ArrayUtil = (function () {
    function ArrayUtil() {
    }
    ArrayUtil.prototype.flattenTree = function (items, flattenPropertyKey, options) {
        var _this = this;
        var list = [];
        var settings = {
            initNode: options.initNode || (function (node) { return node; }),
            uniqueIdStart: options.uniqueIdStart || 1,
            generateUniqueId: options.generateUniqueId || (function () {
                return settings.uniqueIdStart++;
            })
        };
        items.forEach(function (item) {
            _this.flattenTreeNode(item, list, flattenPropertyKey, settings);
        });
        return list;
    };
    ArrayUtil.prototype.flattenTreeNode = function (node, list, flattenPropertyKey, settings) {
        var _this = this;
        node = settings.initNode(node);
        node.id = settings.generateUniqueId();
        list.push(node);
        if (node[flattenPropertyKey]) {
            var refs_1 = [];
            node[flattenPropertyKey].forEach(function (item) {
                refs_1.push(_this.flattenTreeNode(item, list, flattenPropertyKey, settings));
            });
            node[flattenPropertyKey] = refs_1;
        }
        return node;
    };
    return ArrayUtil;
}());
ArrayUtil = __decorate([
    Injectable()
], ArrayUtil);
export { ArrayUtil };
//# sourceMappingURL=array.util.js.map