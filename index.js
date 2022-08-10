//import for inquirer
const inquirer = require('inquirer');
//import for connection to database
const db = require('./db/connection');
//import for connection.table
const cTable = require('console.table');
//import for cfonts from assets dir
const cfonts = require('./assets/cfonts');
//import for figlet from assets dir
// const figlet = require('./assets/figlet');

//Initial Questions
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
                    //function call for view all employees
                    viewEmployees();
                    break;

                case "View All Roles":
                    //function call to view all roles
                    viewRoles();
                    break;

                case "View All Departments":
                    //function call to view all departments
                    viewDepartments();
                    break;

                case "Add Employee":
                    //function call
                    addEmployee();
                    break;
                case "Add Role":
                    //function call
                    addRole();
                    break;
                case "Add Department":
                    //function call
                    addDepartment();
                    break;
                case "Update Employee Role":
                    //function call
                    updateEmployee();
                    break;
                case "Exit":
                    //function call
                    
                    break;
                
                
            }
        })
 
    }

    mainMenu();
    //async function to view all employees
    const viewEmployees = async () => {
        const sql =`SELECT * FROM employees`;
        const dbconn = await db.query(sql);
        console.table(dbconn[0]);

        //call to return to main menu questions
        mainMenu();
    };

    //async function to view all Roles
    const viewRoles = async () => {
        const sql = `SELECT * FROM roles`;
        const dbconn = await db.query(sql);
        console.table(dbconn[0]);
        
        //call to return to main menu questions
        mainMenu();
    };

    // async function to view all Departments
    const viewDepartments = async () => {
        const sql = `SELECT * FROM department`;
        const dbconn = await db.query(sql);
        console.table(dbconn[0]);

        //call to return to main menu questions
        mainMenu();
    };

    const addEmployee = async () => {};

    const addRole = async () => {};

    const addDepartment = async () => {};

    const updateEmployee = async () => {};



