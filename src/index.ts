#!/usr/bin/env node

import inquirer, { ConfirmQuestion, ListQuestion, Question } from 'inquirer';

import chalk from 'chalk';
import colors from 'colors'
import path from 'path';
import program from 'commander';

// import clear from 'clear';
// import figlet from 'figlet';
// import function to list coffeee menu
const list =  require('./list');

// clear();
// console.log(
//   chalk.red(
//     figlet.textSync('pizza-cli', { horizontalLayout: 'full' })
//   )
// );

// program
//   .version('0.0.1')
//   .description("An example CLI for ordering pizza's")
//   .option('-p, --peppers', 'Add peppers')
//   .option('-P, --pineapple', 'Add pineapple')
//   .option('-b, --bbq', 'Add bbq sauce')
//   .option('-c, --cheese <type>', 'Add the specified type of cheese [marble]')
//   .option('-C, --no-cheese', 'You do not want any cheese')
//   .parse(process.argv);

//   console.log('you ordered a pizza with:');
//   if (program.peppers) console.log('  - peppers');
//   if (program.pineapple) console.log('  - pineapple');
//   if (program.bbq) console.log('  - bbq');
  
//   const cheese: string = true === program.cheese ? 'marble' : program.cheese || 'no';
//   console.log('  - %s cheese', cheese);

//   if (!process.argv.slice(2).length) {
//     program.outputHelp();
//   }

// print menu


program
    .command('list') // sub-command name
    .alias('ls') // alternative sub-command is `al`
    .description('List coffee menu') // command description

    // function to execute when command is uses
    .action(function () {
        list();
    });

    program
    .command('order <type>') // sub-command name, coffeeType = type, required
    .alias('o') // alternative sub-command is `o`
    .description('Order a coffee') // command description
    .option('-s, --sugar [value]', 'Sugar level', "Low") // args.sugar = value, optional, default is 'Low'
    .option('-d, --decaf', "Decaf coffee") // args.decaf = true/false, optional, default is `undefined`
    .option('-c, --cold', "Cold coffee") // args.cold = true/false, optional, default is `undefined`
    .option('-S, --served-in [value]', "Served in", "Mug") // args.servedIn = value, optional, default is 'Mug'
    .option('--no-stirrer', 'Do not add stirrer') // args.stirrer = true/false, optional, default is `true`

    // function to execute when command is uses
    .action(function (coffeeType: any, args: any) {
        console.log("YOUR ORDER");
        console.log('------------------');

        console.log('Coffee type is %s', colors.green(coffeeType));
        console.log('args.sugar %s', colors.green(args.sugar));
        console.log('args.decaf %s', colors.green(args.decaf));
        console.log('args.cold %s', colors.green(args.cold));
        console.log('args.servedIn %s', colors.green(args.servedIn));
        console.log('args.stirrer %s', colors.green(args.stirrer));
    });


// allow commander to parse `process.argv`
program.parse(process.argv);

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