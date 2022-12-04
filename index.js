const inquirer=require('inquirer');
const path=require('path');
const fs=require('fs');

const Manager=require('./lib/Manager');
const Engineer=require('./lib/Engineer');
const Intern=require('./lib/Intern');

const DIST_DIR=path.resolve(__dirname,'dist');
const distPath=path.join(DIST_DIR,'teamview.html');
const render=require('./src/template.js');

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
                    console.log(team);
                    build();
            }
        });
    };

    function engineer(){
        inquirer.prompt([
            {
                type:'input',
                name:'engiName',
                message:'What is the name of the engineer?',
            },
            {
                type:'input',
                name:'engiId',
                message:"What is the engineer's id number?",
            },
            {
                type:'input',
                name:'engiEmail',
                message:"What is the engineer's email address?",
            },
            {
                type:'input',
                name:'engiGithub',
                message:"What is the engineer's GitHub address?",
            },
        ])
        .then((answers)=>{
            const engi=new Engineer(
                answers.engiName,
                answers.engiId,
                answers.engiEmail,
                answers.engiGithub
            );
            team.push(engi);
            idAry.push(answers.engiId);
            addMember();
        });
    };

    function intern(){
        inquirer.prompt([
            {
                type:'input',
                name:'internName',
                message:'What is the name of the intern?',
            },
            {
                type:'input',
                name:'internId',
                message:"what is the intern's id number?",
            },
            {
                type:'input',
                name:'internEmail',
                message:"What is the intern's email address?",
            },
            {
                type:'input',
                name:'internSchool',
                message:'What school is the intern attending?',
            },
        ])
        .then((answers)=>{
            const intern=new Intern(
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.internSchool
            );
            team.push(intern);
            idAry.push(answers.internId);
            addMember();
        })
    };

    function build(){
        if(!fs.existsSync(DIST_DIR)){
            fs.mkdirSync(DIST_DIR);
        };
        fs.writeFileSync(distPath,render(team),'utf-8');
    }   
    createManager();
}

createTeam();