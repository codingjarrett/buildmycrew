// Node packages
const fs = require('fs');
const inquirer = require('inquirer');

// Classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Generate HTML
const generateHTML = require('./src/generateHTML');

const crew = [];

const init = async () => {
    await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the first mate's name?`
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the first mate's employee ID?`
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is an email address for the first mate?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number for the first mate?'
        }
    ])

    .then((answers) => {
        const firstMate = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        crew.push(firstMate);
    });
    
    addCrewmate();
};

init();