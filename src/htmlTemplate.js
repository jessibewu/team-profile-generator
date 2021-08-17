// Generate page layout (Bootstrap & font-awesome):
const generateHTML = function (teamString) {

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Team Profile</title>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
</style>
</head>
<body>
<div class="header">
<div class="jumbotron bg-warning mr-3 ml-3 mt-3">
   <h1 class="display-4 text-white text-center">My Team</h1>
</div>
</div>
<div class="container-body container-fluid">
   <div class="row justify-content-center">
        ${teamString} 
    </div>
</div>
<script src="https://kit.fontawesome.com/257de25400.js"></script>  
</body>
</html>`

}

// Generate cards for each employee class based on user input from Node/Inquirer
const generateCard = function (arr) {

    // Font-awesome Icons change based on role
    let icon;
    // Criteria for display
    let role;

    if (arr.title === "Manager") {
        icon = `<i class="fas fa-mug-hot"></i>`
        role = `Office Number: ${arr.officeNumber}`
    } else if (arr.title === "Engineer") {
        icon = `<i class="fas fa-glasses"></i>`
        role = `GitHub: <a href="https://github.com/${arr.github}">${arr.github}</a>`
    } else if (arr.title === "Intern") {
        icon = `<i class="fas fa-user-graduate"></i>`
        role = `School: ${arr.school}`
    }

    return `
    
<div class="col-md-4 col-sm-6 col-12 col-lg-3">    
    <div class="card shadow-lg mb-5 bg-white rounded">
        <div class="card-header bg-primary">
            <h4 class="text-white text-center">${arr.name}</h4>  
            <h4 class="text-white text-center">${icon}</i> ${arr.title}</h4>
        </div>
        <div class="card-body">
            <ul class="list-unstyled">
                <li>Employee ID: ${arr.id}</li>
                <li>Email: <a href="mailto:${arr.email}">${arr.email}</a></li>
                <li>${role}</li>
            </ul>
        </div>
    </div>
</div>
`
}

exports.generateHTML = generateHTML;
exports.generateCard = generateCard;