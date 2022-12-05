const employee = require('../lib/Employee');
const engineer =  require('../lib/Engineer');
const manager = require('../lib/Manager');
const intern = require('../lib/Intern');


function render(array){
    let team=array || [];
    let cards=[];
    console.log(team);
    team.forEach(element=>{
        let prop='';
        const type=element.getRole();
        switch(type){
            case 'Manager':
                prop=`<li class="list-group-item">Office Number: ${element.getOfficeNumber()}</li>`;
                break;
            case 'Intern':
                prop=`<li class="list-group-item">School: ${element.getSchool()}</li>`;
                break;
            case 'Engineer':
                prop=`<li class="list-group-item">GitHub Account: ${element.getGithub()}</li>`;
                break;
            default:
                break;
        }
        const card=
            `<div class="col-4">
                <div class="card border-dark">
                    <div class="card-header">${element.getName()}</div>
                    <ul class="list-group list-group-flush text-dark">
                        <li class="list-group-item">Role: ${element.getRole()}</li>
                        <li class="list-group-item">ID: ${element.getId()}</li>
                        <li class="list-group-item">Email: ${element.getEmail()}</li>
                        ${prop}
                    </ul>
                </div>
            </div>`;
            cards.push(card);
    });

    const cardString=cards.join('');
    const HTMLstring=
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible"/>
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <link href="style.css" rel="stylesheet">
    </head>

    <main>
        <article>
            <header>
                <div class="container text-center bg-secondary">
                    <div class="row">
                        <div class="col-4">
                        </div>
                        <div class="col-4">
                            <h1 class="text-info">My Team</h1>
                        </div>
                        <div class="col-4">
                        </div>
                    </div>
                </div>
            </header>
        </article>
        
        <div class="container-fluid text-center">
            <div class="row">
                ${cardString}`
    
    return HTMLstring;
};

module.exports = render;