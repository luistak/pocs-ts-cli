"use strict";
var colors = require('colors');
var types = require('./values').types;
// export function to list coffee
module.exports = function () {
    console.log('COFFEE MENU');
    console.log('------------------');
    // list on separate lines
    types.forEach(function (type) {
        console.log('%s %s', colors.bold(type.name), colors.grey('/ ' + type.price));
    });
};
