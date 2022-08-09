//import for inquirer
const inquirer = require('inquirer');
//import for connection to database
const db = require('./db/connection');
//import for connection.table
const cTable = require('console.table');
//import for figlet
const figlet = require('figlet');

// figlet('Employee Tracker', function(err, data) {
//     if(err) {
//         console.log('something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });

const mainMenu = () => {
    inquirer
        .prompt({
            name: 'initQuestion',
            message: 'What would you like to do?',
            type: "list",
            choices: [
                "View All Employees",
                "View All Roles",
                "View All Departments",
                "Add Employee",
                "Add Role",
                "Add Department",
                "Update Employee Role",
                "Exit",
            ],
        })
        //promise chain to loop through initial questions 
        .then((res) => {
            switch (res.initQuestion) {
                case "View All Employees":
                    //function call for employee
                    viewEmployees();
                    break;
                case "View All Roles":
                    //function call
                    break;
                    case "View All Departments":
                    //function call
                    
                    break;
                    case "Add Employee":
                    //function call

                    break;
                case "Add Role":
                    //function call

                    break;
                case "Add Department":
                    //function call

                    break;
                case "Update Employee Role":
                    //function call

                    break;
                case "Exit":
                    //function call

                    break;
                
                
            }
        })
 
    }
    mainMenu();

    const viewEmployees = async () => {};
    const viewRoles = async () => {};
    const viewDepartments = async () => {};
    const addEmployee = async () => {};
    const addRole = async () => {};
    const addDepartment = async () => {};
    const updateEmployee = async () => {};