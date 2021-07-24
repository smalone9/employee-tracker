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

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1, "Apu", "Nahasapeemapetilon", 1, 71),
(2, "Homer", "Simpson", 67, 2),
(3, "Joseph", "Quimby", 42, 6),
(4, "Edna", "Krabappel", 12000, 20);
