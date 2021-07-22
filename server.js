const db = require ("./db/connection");
const inquirer = require("require");
const path = require("path");
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
        userPrompt();
        } catch (error) {
           console.log(error); 
        }
}

// post route to add employee info.
app.post("/api/employee", ({ body }, res) => {
    const errors = checkServer(body, "first_name", "last_name", "role_id", "manager_id");
    if (errors) {
        res.status(404).json({ error: errors })
        return;
    }
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
    const params = [body.first_name, body.last_name, body.role_id, body.manager_id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(404).json({ error: res.message });
            return;
        }
        res.json({
            message: "Employee Added",
            data: body
        });
    });
});
// create new employee
// call first function
userPrompt()