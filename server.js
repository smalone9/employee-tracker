const db = require("./db/connection");
const inquirer = require("inquirer");
// const path = require("path");
const util = require("util");

db.query = util.promisify(db.query);

// async await functions to prompt user
const userPrompt = async() => {
    try {
        const {answer} = await inquirer.prompt({
            type: "list",
            message: "What would you like to do?",
            name: "answer",
            // user options
            choices: ["View all Departments", "View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update Employee Role", "Quit"]
        })
        switch(answer){
            case "View all Departments":
                getAllDepartments()
                break;
            case "View all Roles":
                getAllRoles()
                break;
            case "View all Employees":
                getAllEmployees()
                break;
            case "Add a Department":
                addDepartment()
                break;
            case "Add a Role":
                addRole()
                break;
            case "Add an Employee":
                AddEmployee()
                break;
            case "Update Employee Role":
                updateEmployee()
                break;    
            default:
                process.exit();
        }
    }   catch (error) {
        
    }
};

// access all departments
const getAllDepartments = async() => {
    try {
    const sql = `SELECT * FROM department`;
    const allDepartments = await db.query(sql);
    console.table(allDepartments);
    userPrompt();
    } catch (error) {
       console.log(error); 
    }
};

// access all roles
const getAllRoles = async() => {
    try {
    const sql = `SELECT * FROM role`;
    const allRoles = await db.query(sql);
    console.table(allRoles);
    userPrompt();
    } catch (error) {
       console.log(error); 
    }
};

// access all employees
const getAllEmployees = async() => {
    try {
    const sql = `SELECT * FROM employee`;
    const allEmployees = await db.query(sql);
    console.table(allEmployees);
    userPrompt();
    } catch (error) {
       console.log(error); 
    }
};

// add a department
const addDepartment = async() => {
    try {
        const sql = `INSERT INTO department`;
        const addDepartment = await db.query(sql);
        console.table(addDepartment);
        userPrompt();
        } catch (error) {
           console.log(error); 
        }
    };
    // const sql = `INSERT INTO department`;
    // inquirer.prompt([
    //     {
    //     name:"name",
    //     type: "input",
    //     message: "Which department would you like to add?"

// add a role
const addRole = async() => {
    try {
    const sql = `INSERT INTO role`;
    const addRole = await db.query(sql);
    console.table(addRole);
    userPrompt();
    } catch (error) {
       console.log(error); 
    }
};

// add an employee
const addEmployee = async() => {
    try {
    const sql = `INSERT INTO employee`;
    const addEmployee = await db.query(sql);
    console.table(addEmployee);
    userPrompt();
    } catch (error) {
       console.log(error); 
    }
};

// create function to update
const updateEmployee = async() => {
    try {
        const allEmployees = await db.query(`UPDATE * FROM employee`);
        const allRoles = await db.query(`UPDATE * FROM roles`);
        const employeeChoices = allEmployees.map(employee => {
            return {
                name:`${employee.first_name} ${employee.last_name}`,
                value: `${employee.id}`
        }
        })
        console.table(allRoles);
        console.table(employeeChoices);
        userPrompt();
        } catch (error) {
           console.log(error); 
        }
}
// call first function
userPrompt()