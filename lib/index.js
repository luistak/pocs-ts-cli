#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
var chalk_1 = __importDefault(require("chalk"));
var clear_1 = __importDefault(require("clear"));
var figlet_1 = __importDefault(require("figlet"));
var commander_1 = __importDefault(require("commander"));
var list = require('./list');
clear_1.default();
console.log(chalk_1.default.red(figlet_1.default.textSync('Coffee Shop Cli', { horizontalLayout: 'full' })));
commander_1.default
    .command('list')
    .alias('ls')
    .description('List coffee menu')
    .action(list);
commander_1.default
    .command('order')
    .alias('o')
    .description('Order a coffee')
    .action(function () {
    var values = require('./values');
    var questions = [
        { type: 'list', name: 'coffeType', message: 'Choose coffee type', choices: values.typesPlain },
        { type: 'list', name: 'sugarLevel', message: 'Choose your sugar level', choices: values.sugarPlain },
        { type: 'confirm', name: 'decaf', message: 'Do you prefer your coffee to be decaf?', default: false },
        { type: 'confirm', name: 'cold', message: 'Do you prefer your coffee to be cold?', default: false },
        { type: 'list', name: 'servedIn', message: 'How do you prefer your coffee to be served in', choices: values.servedIn },
        { type: 'confirm', name: 'stirrer', message: 'Do you prefer your coffee with a stirrer?', default: true },
    ];
    inquirer_1.default
        .prompt(questions)
        .then(function (answers) {
        console.log(answers);
    });
});
commander_1.default.parse(process.argv);
