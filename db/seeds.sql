INSERT INTO department (departmentName)
VALUES
("Kwick-e-Mart"),
("Nuclear Power Plant"),
("Springfield Government"),
("Springfield Elementray School");

INSERT INTO role (title, salary, department_id)
VALUES
("Manager", 30000, 1),
("Safety Officer", 120000, 2),
("Mayor", 1000000, 3),
("Teacher", 12000, 4);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES
("Apu", "Nahasapeemapetilon", NULL, 1),
("Homer", "Simpson", NULL, 2),
("Joseph", "Quimby", NULL, 3),
("Edna", "Krabappel", NULL, 4);
