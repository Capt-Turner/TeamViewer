const employee = require('../lib/Employee');

function render(array){
    let team=array || [];
    let cards=[];
    console.log(team);
    team.forEach(element=>{
        let prop='';
        const type=this.getRole();
        switch(type){
            case 'Manager':
                prop=`<li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>`;
                break;
            case 'Intern':
                prop=`<li class="list-group-item">School: ${employee.getSchool()}</li>`;
                break;
            case 'Engineer':
                prop=`<li class="list-group-item">GitHub Account: ${employee.getGitHub()}</li>`;
                break;
            default:
                break;
        }
        const card=
            `<div class="card">
                <div class="card-header">${employee.getName()}</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Role: ${employee.getRole()}</li>
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: ${employee.getEmail()}}</li>
                    ${prop}
                </ul>
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
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 mb-3>
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-4>
                    ${cardString}`
    
    return HTMLstring;
};

module.exports = render;