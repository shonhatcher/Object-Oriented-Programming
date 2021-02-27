const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'manager',
        },
        {
            type: 'input',
            message: "What is the employee's ID?",
            name: 'ID',
        },
        {
            type: 'input',
            message: "What is the employee's email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the employee's office number?",
            name: 'phone',
        },
        {
            type: 'list',
            message: "What do you want to do next?",
            choices: ['Add an engineer','Add an intern','Finish building team'],
            name: 'list',
        },
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: 'eName',
            when: (response) => response.list =='Add an engineer',
        },
        {
            type: 'input',
            message: "What is the engineer's employee ID?",
            name: 'eID',
            when: (response) => response.list =='Add an engineer',
        },
        {
            type: 'input',
            message: "What is the engineer's email address?",
            name: 'eEmail',
            when: (response) => response.list =='Add an engineer',
        },  {
            type: 'input',
            message: "What is the engineer's Github username?",
            name: 'eGithub',
            when: (response) => response.list =='Add an engineer',
        },
        {
            type: 'input',
            message: "What is the intern's name?",
            name: 'iName',
            when: (response) => response.list =='Add an intern',
        },
        {
            type: 'input',
            message: "What is the intern's employee ID?",
            name: 'iID',
            when: (response) => response.list =='Add an intern',
        },
        {
            type: 'input',
            message: "What is the intern's email address?",
            name: 'iEmail',
            when: (response) => response.list =='Add an intern',
        },  
        {
            type: 'input',
            message: "What is school does the intern attend?",
            name: 'iSchool',
            when: (response) => response.list =='Add an intern',
        },
        {
            type: 'list',
            message: "What do you want to do next?",
            choices: ['Add an engineer','Add an intern','Finish building team'],
            name: 'list',
            loop: 'list',
            //when: (response) => response.iSchool !='' || response.list1 == 'Add an intern',
        },
    ])
    .then((response) => 
        console.log("success")
    );

