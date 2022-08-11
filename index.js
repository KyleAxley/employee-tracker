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
        "View Employees by Manager",
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

        //function call for viewing employee's manager
        case "View Employees by Manager":
          viewEmployeesManager();
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
          //function call for add new employee by first & last name, role, reporting too
          addEmployee();
          break;
        case "Add Role":
          //function call for adding role, salary, department
          addRole();
          break;
        case "Add Department":
          //function call to add new department
          addDepartment();
          break;
        case "Update Employee Role":
          //function call
          updateEmployee();
          break;
        case "Exit":
          db.end();
          break;
      }
    });
};
mainMenu();

//async function to view all employees
const viewEmployees = async () => {
  const sql = `SELECT employees.id, first_name AS first, last_name AS last, department.name AS department, title, salary
  FROM employees
  LEFT JOIN roles ON role_id = roles.id
  LEFT JOIN department ON roles.department_id = department.id;`;
  const dbconn = await db.query(sql);
  console.table(dbconn[0]);

  //call to return to main menu questions
  mainMenu();
};

const viewEmployeesManager = async () => {
  const mangSql = `SELECT * FROM employees 
  WHERE manager_id is NULL`;
  const manager = await db.query(mangSql);
  const empManagers = await inquirer.prompt([
    {
      type: "list",
      name: "chooseManager",
      message: "Which manager's employees would you like to view?",
      choices: manager[0].map((manager) => {
        return {
          name: manager.first_name + " " + manager.last_name,
          value: manager.id,
        };
      }),
    },
  ]);
  const sql = `SELECT first_name AS first, last_name AS last 
  FROM employees 
  WHERE manager_id = ?`;
  const dbconn = await db.query(sql, empManagers.chooseManager);
  console.table(dbconn[0]);
  //call to return to main menu
  mainMenu();
};

//async function to view all Roles
const viewRoles = async () => {
  const sql = `SELECT roles.id, roles.title, name AS department, roles.salary
  FROM roles
  JOIN department ON department.id=roles.department_id;`;
  const dbconn = await db.query(sql);
  console.table(dbconn[0]);

  //call to return to main menu questions
  mainMenu();
};

// async function to view all Departments
const viewDepartments = async () => {
  const sql = `SELECT department.name AS department, department.id
  FROM department;`;
  const dbconn = await db.query(sql);
  console.table(dbconn[0]);

  //call to return to main menu questions
  mainMenu();
};

//async function to add new employee by first & last name, role and if manager
const addEmployee = async () => {
  const empSql = `SELECT * FROM employees WHERE manager_id is NULL`;
  const managers = await db.query(empSql);
  const roleSql = `SELECT * FROM roles`;
  const roles = await db.query(roleSql);

  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "Please enter employee's first name:",
      //regular expression to deny everything other than lower case a-z uppercase A-Z and '
      validate: (firstNameInput) => {
        if (
          firstNameInput &&
          firstNameInput.length < 31 &&
          firstNameInput.search(/[^a-zA-Z/-\s]/g) === -1
        ) {
          return true;
        } else {
          console.log(
            " Is not a valid name! Names cannot contain symbols, numbers or exceed 30 characters."
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "lastName",
      message: "Please enter employee's last name:",
      //regular expression to deny everything other than lower case a-z uppercase A-Z and '
      validate: (lastNameInput) => {
        if (
          lastNameInput &&
          lastNameInput.length < 31 &&
          lastNameInput.search(/[^a-zA-Z/-\s]/g) === -1
        ) {
          return true;
        } else {
          console.log(
            " Is not a valid name! Names cannot contain symbols, numbers or exceed 30 characters."
          );
          return false;
        }
      },
    },
    {
      type: "list",
      name: "roleId",
      message: "What is the new employee's role?",
      choices: roles[0].map((role) => {
        return {
          name: role.title,
          value: role.id,
        };
      }),
    },
    {
      type: "list",
      name: "managerId",
      message: "Who is the employee reporting to?",
      choices: managers[0].map((manager) => {
        return {
          name: manager.first_name + " " + manager.last_name,
          value: manager.id,
        };
      }),
    },
  ]);
  const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
  //method to save new employee to database
  await db.query(sql, [
    answers.firstName,
    answers.lastName,
    answers.roleId,
    answers.managerId,
  ]);
  //call to return to main menu
  mainMenu();
};

//function to add role, salary and department
const addRole = async () => {
  const depSql = `SELECT * FROM department`;
  const departmentRole = await db.query(depSql);
  const newTitle = await inquirer.prompt([
    {
      type: "input",
      name: "titleName",
      message: "Please input what the new role is.",
      //regular expression to deny everything other than lower case a-z uppercase A-Z and '
      validate: (titleNameInput) => {
        if (
          titleNameInput &&
          titleNameInput.length < 31 &&
          titleNameInput.search(/[^a-zA-Z/-\s]/g) === -1
        ) {
          return true;
        } else {
          console.log(" is not a valid entry for a role please try again!");
        }
        return false;
      },
    },
    {
      input: "input",
      name: "roleSalary",
      message: "Please input what the salary is for this role.",
      //regular expression to deny everything other than 0-9'
      validate: (roleSalaryInput) => {
        if (
          roleSalaryInput &&
          roleSalaryInput.length < 9 &&
          roleSalaryInput.search(/[^0-9\.]/g) === -1
        ) {
          return true;
        } else {
          console.log(" is not a valid entry for a salary please try again!");
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
        };
      }),
    },
  ]);

  const roleSql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;
  //method to insert new role title,salary and id into database.
  await db.query(roleSql, [
    newTitle.titleName,
    newTitle.roleSalary,
    newTitle.departmentRole,
  ]);
  //call to return to main menu
  mainMenu();
};

const addDepartment = async () => {
  const sql = `INSERT INTO department (name) VALUES (?)`;
  const addDepart = await inquirer.prompt([
    {
      type: "input",
      name: "newDepartment",
      message: "What is the name of the new department being added?",
      //regular expression to everything other than lower case a-z uppercase A-Z and '
      validate: (newDepartmentInput) => {
        if (
          newDepartmentInput &&
          newDepartmentInput.length < 31 &&
          newDepartmentInput.search(/[^a-zA-Z/-\s]/g) === -1
        ) {
          return true;
        } else {
          console.log(
            " Is not a valid entry for a department please try again!"
          );
          return false;
        }
      },
    },
  ]);
  //method to insert new department into table after question and validation pass
  await db.query(sql, addDepart.newDepartment);
  mainMenu();
};

const updateEmployee = async () => {
  const sql = `SELECT * FROM employees`;
  const dbconn = await db.query(sql);
  const task = await inquirer.prompt([
    {
      type: "list",
      name: "empSelect",
      message: "Who are you updating?",
      choices: dbconn[0].map((employee) => {
        return {
          name: employee.first_name + " " + employee.last_name,
          value: employee.id,
        };
      }),
    },
    {
      type: "list",
      name: "changeEmp",
      message: "What updates are you making to employee?",
      choices: [
        { name: "Update Employee Role", value: [0] },
        { name: "Update manager", value: [1] },
      ],
    },
  ]);
  if (task.changeEmp == 0) {
    const roleSql = `SELECT * FROM roles`;
    const roles = await db.query(roleSql);
    const allRoles = await inquirer.prompt([
      {
        type: "list",
        name: "newRole",
        message: "What is the employee's new role?",
        choices: roles[0].map((role) => {
          return {
            name: role.title,
            value: role.id,
          };
        }),
      },
    ]);
    console.table(allRoles.newRole, task.empSelect);
    const upDate = `UPDATE employees SET role_id =? WHERE id =?`;
    await db.query(upDate, [allRoles.newRole, task.empSelect]);
  } else if (task.changeEmp == 1) {
    const mangSql = `SELECT * FROM employees WHERE manager_id IS NULL`;
    const managers = await db.query(mangSql);
    const allManagers = await inquirer.prompt([
      {
        type: "list",
        name: "chooseManager",
        message: "Which manager should the employee now report to?",
        choices: managers[0].map((manager) => {
          return {
            name: manager.first_name + " " + manager.last_name,
            value: manager.id,
          };
        }),
      },
    ]);
    const upDate = `UPDATE employees SET manager_id =? WHERE id =?`;
    await db.query(upDate, [allManagers.chooseManager, task.empSelect]);
  }
  // call to return to main menu
  mainMenu();
};
