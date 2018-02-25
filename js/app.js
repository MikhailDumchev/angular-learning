"use strict";
(function() {
    var store = angular.module("store", []);
    store.controller("DisplayController", function() {
        console.log(model);
        this.products = model.items;
    });
}());