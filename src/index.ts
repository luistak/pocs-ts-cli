#!/usr/bin/env node

import inquirer, { ConfirmQuestion, ListQuestion, Question } from 'inquirer';

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import program from 'commander';

const list =  require('./list');

clear();

console.log(chalk.red(figlet.textSync('Coffee Shop Cli', { horizontalLayout: 'full' })));

program
    .command('list')
    .alias('ls')
    .description('List coffee menu')
    .action(list);

program
    .command('order')
    .alias('o')
    .description('Order a coffee')
    .action(function () {
        const values = require('./values');
        const questions: Question[] = [
            { type: 'list', name: 'coffeType', message: 'Choose coffee type', choices: values.typesPlain },
            { type: 'list', name: 'sugarLevel', message: 'Choose your sugar level', choices: values.sugarPlain },
            { type: 'confirm', name: 'decaf', message: 'Do you prefer your coffee to be decaf?', default: false },
            { type: 'confirm', name: 'cold', message: 'Do you prefer your coffee to be cold?', default: false },
            { type: 'list', name: 'servedIn', message: 'How do you prefer your coffee to be served in', choices: values.servedIn },
            { type: 'confirm', name: 'stirrer', message: 'Do you prefer your coffee with a stirrer?', default: true },
        ];

        inquirer
            .prompt(questions)
            .then(function (answers: any) {
                console.log(answers);
            })
    });


program.parse(process.argv);