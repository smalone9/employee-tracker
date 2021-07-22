const db = require ("./db/connection");
const inquirer = require("require");
const path = require("path");
const util = require("util");

db.query = util.promisify(db.query);

const userPrompt = async() => {
    try {
        const {answer} = await inquirer.prompt({
            type: "list",
            message: "What would you like to do?",
            name: "answer",
            // add more options
            choices: ["View all employees", "View all roles", "View all Departments", "Update Employee Role", "Quit"]
        })
        switch(answer){
            case "View all employees":
                getAllEmployees()
                break;
            case "View all roles":
                getAllRoles()
                break;
            case "View all Departments":
                getAllDepartments()
                break;
            case "Update Employee Role":
                updateEmployee()
                break;
                // add more options
            default:
                process.exit();
        }
    }   catch (error) {
        
    }
}
// get route to access all employees
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