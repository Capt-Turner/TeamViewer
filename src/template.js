function render(array){
    // let team=array;
    
    // team.forEach(element => {
    //     switch (element) {
    //         case Manager:
    //             const card=document.createElement("div");
    //             const cardBod=document.createElement("div");
    //             const head=document.createElement("h5");
    //             const cardCont=document.createElement("ul");
    //             const idEl=document.createElement("li");
    //             const emailEl=document.createElement("li");
    //             const roleEl=document.createElement("li");
    //             const variable=document.createElement("li");

    //             card.setAttribute('class','card');
    //             cardBod.setAttribute('class','card-body');
    //             head.setAttribute('class','card-title');
    //             cardCont.setAttribute('class','list-group');
    //             idEl.setAttribute('class','list-group-item');
    //             emailEl.setAttribute('class','list-group-item');
    //             roleEl.setAttribute('class','list-group-item');
    //             variable.setAttribute('class','list-group-item');
                
    //             head.textContent=`${this.name}`;
    //             variable.textContent=`Office Number: ${this.officeNumber}`;
    //             idEl.textContent=`ID: ${this.id}`;
    //             emailEl.textContent=`Email: ${this.email}`;
    //             roleEl.textContent='Role: Manager';
                

    //             break;
    //         case Engineer:

    //             break;
    //         case Intern:

    //             break;
    //         default:
                
    //             break;
    //     }
    // });

    return `
<!DOCTYPE html>
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
            


`
}

module.exports = render();