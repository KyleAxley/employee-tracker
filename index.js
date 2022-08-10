//import for inquirer
const inquirer = require("inquirer");
//import for connection to database
const db = require("./db/connection");
//import for connection.table
const cTable = require("console.table");
//import for cfonts from assets dir
const cfonts = require("./assets/cfonts");
//import for figlet from assets dir
// const figlet = require('./assets/figlet');

//Initial Questions
const mainMenu = () => {
  inquirer
    .prompt({
      name: "initQuestion",
      message: "What would you like to do?",
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
    });
};

mainMenu();
//async function to view all employees
const viewEmployees = async () => {
  const sql = `SELECT * FROM employees`;
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

const addRole = async () => {
  const sql = `SELECT * FROM department INSERT INTO roles (name, salary, department) VALUES (?, ?, ?) `;
  const departmentRole = await db.query(sql)
  const newTitle = await inquirer.prompt([
    {
      type: "input",
      name: "tiltleName",
      message: "Please input what the new role is.",
      validate: (titleNameInput) => {
        if (titleNameInput && titleNameInput.length < 31 && titleNameInput.search(/[^a-zA-Z/-\s]/g) === -1) {
          return true;
        } else {
          console.log(" is not a valid role please try again!");
        }
        return false;
      },
    },
    {
      input: "input",
      name: "roleSalary",
      message: "Please input what the salary is for this role.",
      validate: roleSalaryInput => {
        if (roleSalaryInput && roleSalaryInput.length < 9 && roleSalaryInput.search(/[^0-9\.]/g) === -1) {
          return true;
        } else {
          console.log(" is not a valid salary please enter try again!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "departmentRole",
      message: "Please input which department this new role will be in.",
      choices: departmentRole[0].map((department) => {
        return {
            name: department.name,
            value: department.id,
        }
      })
    },
  ]);
};

const addDepartment = async () => {};

const updateEmployee = async () => {};
