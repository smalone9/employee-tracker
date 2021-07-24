INSERT INTO department (id, name)
VALUES
(1, "Kwick-e-Mart"),
(2, "Nuclear Power Plant"),
(3, "Springfield Government"),
(4, "Springfield Elementray School");

INSERT INTO role (id, title, salary, department_id)
VALUES
(1, "Manager", 30000, 15),
(2, "Safety Officer", 120000, 3),
(3, "Mayor", 1000000, 7),
(4, "Teacher", 12000, 20);

INSERT INTO employee (id, first_name, last_name, manager_id, role_id)
VALUES
(1, "Apu", "Nahasapeemapetilon", NULL, 1),
(2, "Homer", "Simpson", NULL , 67),
(3, "Joseph", "Quimby", NULL , 42),
(4, "Edna", "Krabappel", NULL , 12000);
