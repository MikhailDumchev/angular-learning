"use strict";
(function() {
    var store = angular.module("store", []);
    store.controller("DisplayController", function() {
        this.products = model.items;
    });
    store.controller("PanelController", function() {
        var currentTab = 1;
        this.CurrentTab = function(value) {
            if (!arguments.length) return currentTab;
            else currentTab = value;
        };
        this.check = function(value) {
            return currentTab === value;
        };
    });
    store.controller("ChatController", function() {
        this.opinions = opinions.items;
    });
}());