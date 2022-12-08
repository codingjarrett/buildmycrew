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

const addCrewmate = async () => {
    await inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Recruit a',
            choices: ['shipwright', 'crewmate', 'Crew complete!']
        }
    ])
    .then(async (answers) => {
        const role = answers.menu;
        await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the ${role}'s name?`,
                when: role != 'Crew complete!'
            },
            {
                type: 'input',
                name: 'id',
                message: `What is the ${role}'s employee ID?`,
                when: role != 'Crew complete!'
            },
            {
                type: 'input',
                name: 'email',
                message: `What is an email address for the ${role}?`,
                when: role != 'Crew complete!'
            },
            {
                type: 'input',
                name: 'github',
                message: `What is the shipwright's GitHub username?`,
                when: role === 'shipwright'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school does the crewmate attend?',
                when: role === 'crewmate'
            }
        ])

        .then((answers) => {
            if (role === 'shipwright') {
                const shipwright = new Engineer(answers.name, answers.id, answers.email, answers.github);
                crew.push(shipwright);
                addCrewmate();
            } else if (role === 'crewmate') {
                const crewmate = new Intern(answers.name, answers.id, answers.email, answers.school);
                crew.push(crewmate);
                addCrewmate();
            } else {
                return writeToFile(generateHTML(crew));
            }
        })
    });
};

const writeToFile = (answers) => {
    fs.writeFile('./dist/index.html', answers, (err) => {
        err ? console.log(err) : console.log('Crew roster created!')
    });
};