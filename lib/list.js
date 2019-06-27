"use strict";
var chalk = require('chalk');
var types = require('./values').types;
// export function to list coffee
module.exports = function () {
    console.log('COFFEE MENU');
    console.log('------------------');
    // list on separate lines
    types.forEach(function (type) {
        console.log('%s %s', chalk.bold(type.name), chalk.grey('/ ' + type.price));
    });
};
