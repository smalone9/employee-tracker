const db = require ("./db/connection");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const checkServer = require("./utils/checkServer");
const { resourceLimits } = require("worker_threads");

// middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// get route to access all employees
app.get("/api/employee", (req, res) => {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: "Welcome to the Employee Tracker",
            data: rows
        })
    })
});

// get route to access one employee
app.get("/api/employee/:id", (req, res) => {
    const sql = `SELECT FROM * employee WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: "Welcome to the Employee Tracker",
            data: rows
        })
    })
});

// delete route to remove employee
app.delete("/api/employee/:id", (req, res) => {
    const sql = `DELETE FROM * employee WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(404).json({ error: res.message });
        } else if (!resourceLimits.rowsAffected) {
            res.json({
                message: "Incorrect Employee ID"
            })
        } else {
        res.json({
            message: "Employee Deleted",
            changes: result.rowsAffected,
            id: req.params.id
        });
    };
    });
});

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