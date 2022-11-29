const inquirer=require('inquirer');
const path=require('path');
const fs=require('fs');

const Manager=require('./lib/Manager');
const Engineer=require('./lib/Engineer');
const Intern=require('./lib/Intern');

const DIST_DIR=path.resolve(__dirname,'dist');
const distPath=path.join(DIST_DIR,'teamview.html');
const render=require('./src/pagetemplate.js');
const internal = require('stream');
const { builtinModules } = require('module');

const team=[];
const idAry=[];

function createTeam(){
    function createManager(){
        console.log('Begin building your team!');
        inquirer.prompt([
            {
                type:'input',
                name:'managerName',
                message:"What is the name of the team's manager?",
            },
            {
                type:'input',
                name:'managerId',
                message:"What is the manager's id number?",
            },
            {
                type:'input',
                name:'managerEmail',
                message:"What is the manager's email address?",
            },
            {
                type:'input',
                name:'officeNumber',
                message:"What is the manager's office number?",
            },
        ])
        .then((answers)=>{
            const manager=new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.officeNumber
            );
            team.push(manager);
            idAry.push(answers.managerId);
            addMember();
        });
    };

    function addMember(){
        inquirer.prompt([
            {
                type:'list',
                name:'roleChoice',
                message:'What type of member are you adding?',
                choices:['Engineer','Intern','My team is finished'],
            },
        ])
        .then((userChoice)=>{
            switch (userChoice.roleChoice){
                case 'Engineer':
                    engineer();
                    break;
                case 'Intern':
                    intern();
                    break;
                default:
                    build();
            }
        });
    };

    function engineer(){
        
    };

    function intern(){

    };

    function build(){
        
    }
}