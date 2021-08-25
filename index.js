const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./src/htmlTemplate");

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamString = ``;

// Async function to run application (generateHTML & writeFile)
async function main() {
    try {
        await prompt()

        for(let i = 0; i < teamArray.length; i++) {
            teamString = teamString + html.generateCard(teamArray[i]);
        }

        let finalHtml = html.generateHTML(teamString)

        console.clear();
        console.log("Generating index.html file....");

        writeFileAsync("./dist/index.html", finalHtml);

        console.clear();
        console.log("index.html file created successfully");

    } catch (err) {
        return console.log(err);
    }
}

// Inquirer prompts to gather user input/data
async function prompt() {
    let responseDone = "";

    do {
        try {
            let response = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the employee's name? (Required)",
                    validate: function validateName(name){
                        return name !== '';
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter the employee's ID. (Required)",
                    validate: function validateName(name){
                        return name !== '';
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter the employee's email address. (Required)",
                    validate: function validateEmail(name){
                        return name !== '';
                    }
                },
                {
                    type: "list",
                    name: "role",
                    message: "What what is the employee's role:",
                    choices: [
                         "Engineer",
                         "Intern",
                         "Manager"
                    ]
                }
            ]);

            let response2 = ""

               if (response.role === "Engineer") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "data",
                         message: "What is the employee's github username?",
                         validate: function validateName(name){
                            return name !== '';
                        },
                    }, ]);

                // Add to team Array
                const engineer = new Engineer(response.name, response.id, response.email, response2.data);
                teamArray.push(engineer);

               } else if (response.role === "Intern") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "data",
                         message: "What school is the employee attending?",
                         validate: function validateName(name){
                            return name !== '';
                        },
                    }, ]);

                // Add to team Array
                const intern = new Intern(response.name, response.id, response.email, response2.data);
                teamArray.push(intern);

               } else if (response.role === "Manager") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "data",
                         message: "What is the employee's office number?",
                         validate: function validateName(name){
                            return name !== '';
                        },
                    }, ]);

                // Add to team Array
                const manager = new Manager(response.name, response.id, response.email, response2.data);
                teamArray.push(manager);
               }

        } catch (err) {
            return console.log(err);
        }

          responseDone = await inquirer.prompt([{
               type: "list",
               name: "finish",
               message: "Do you want to continue?",
               choices: [
                    "Yes",
                    "No"
               ]
            },]);

     } while (responseDone.finish === "Yes");
}

// Run Application
main();