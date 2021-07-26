const db = require("./db/connection");
const inquirer = require("inquirer");
// const path = require("path");
const util = require("util");

db.query = util.promisify(db.query);

// async await functions to prompt user
const userPrompt = async () => {
  try {
    const { answer } = await inquirer.prompt({
      type: "list",
      message: "What would you like to do?",
      name: "answer",
      // user options
      choices: [
        "View all Departments",
        "View all Roles",
        "View all Employees",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Update Employee Role",
        "Quit",
      ],
    });
    switch (answer) {
      case "View all Departments":
        getAllDepartments();
        break;
      case "View all Roles":
        getAllRoles();
        break;
      case "View all Employees":
        getAllEmployees();
        break;
      case "Add a Department":
        addDepartment();
        break;
      case "Add a Role":
        addRole();
        break;
      case "Add an Employee":
        AddEmployee();
        break;
      case "Update Employee Role":
        updateEmployee();
        break;
      default:
        process.exit();
    }
  } catch (error) {}
};

// access all departments
const getAllDepartments = async () => {
  try {
    const sql = "SELECT * FROM department";
    const allDepartments = await db.query(sql);
    console.table(allDepartments);
    userPrompt();
  } catch (error) {
    console.log(error);
  }
};

// access all roles
const getAllRoles = async () => {
  try {
    const sql = "SELECT * FROM role";
    const allRoles = await db.query(sql);
    console.table(allRoles);
    userPrompt();
  } catch (error) {
    console.log(error);
  }
};

// access all employees
const getAllEmployees = async () => {
  try {
    const sql = "SELECT * FROM employee";
    const allEmployees = await db.query(sql);
    console.table(allEmployees);
    userPrompt();
  } catch (error) {
    console.log(error);
  }
};

// add a department
const addDepartment = async () => {
  try {
    const sql = "SELECT * FROM department";
    const allDepartments = await db.query(sql);
    console.log(allDepartments);
    let response = await inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: "Which department would you like to add?",
      },
    ]);
    console.log(Object.values(response));
    console.log(response.name);
    const addDepartment = `INSERT INTO department (departmentName) VALUES ('${response.name}')`;
    console.log(addDepartment);
    db.query(addDepartment);
    console.log("end of function");
    // console.table(addDepartment);
    userPrompt();
  } catch (error) {
    console.log(error);
  }
};

// add a role
const addRole = async () => {
  try {
    const sql = "SELECT * FROM role";
    const allRoles = await db.query(sql);
    console.log(allRoles);
    let response = await inquirer.prompt([
      {
        name: "title",
        type: "input",
        message: "Which role would you like to add?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary?",
      },
      {
        name: "department_id",
        type: "number",
        message: "What is the department id?", 
      },
    ]);
    console.log(Object.values(response));
    console.log(response.name);
    const addRole = `INSERT INTO role (title, salary, department_id) VALUES ('${response.name}')`;
    console.log(addRole);
    db.query(addRole);
    console.table(addRole);
    console.log("end of function");
    userPrompt();
  } catch (error) {
    console.log(error);
  }
};

// add an employee
const addEmployee = async () => {
    try {
        const sql = "SELECT * FROM employee";
        const allEmployees = await db.query(sql);
        console.log(allEmployees);
        let response = await inquirer.prompt([
          {
            name: "first_name",
            type: "input",
            message: "What is the first name?",
          },
          {
            name: "last_name",
            type: "input",
            message: "What is the last name?",
          },
          {
            name: "manager_id",
            type: "number",
            message: "What is the manager id?",
          },
          {
            name: "role_id",
            type: "number",
            message: "What is the role id?", 
          },
        ]);
        console.log(Object.values(response));
        console.log(response);
        const addEmployee = `INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ('${response}')`;
        console.log(addEmployee);
        db.query(addEmployee);
        console.table(addEmployee);
        console.log("end of function");
        userPrompt();
      } catch (error) {
        console.log(error);
      }
};

// create function to update
const updateEmployee = async () => {
  try {
    const allEmployees = await db.query("UPDATE * FROM employee");
    const allRoles = await db.query("UPDATE * FROM roles");
    const employeeChoices = allEmployees.map((employee) => {
      return {
        name: `${employee.first_name} ${employee.last_name}`,
        value: `${employee.id}`,
      };
    });
    console.table(allRoles);
    console.table(employeeChoices);
    userPrompt();
  } catch (error) {
    console.log(error);
  }
};
// call first function
userPrompt();
