DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

CREATE TABLE department(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    departmentName VARCHAR(30) NOT NULL
);

CREATE TABLE role(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER,
    CONSTRAINT fk_department FOREIGN KEY (department_id)
    REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employee (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  manager_id INTEGER,
  role_id INTEGER ,
  CONSTRAINT fk_Role FOREIGN KEY(role_id)
  REFERENCES role(id)
  ON DELETE SET NULL
);

-- CREATE TABLE employee(
--     id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(30) NOT NULL,
--     last_name VARCHAR(30) NOT NULL,
--     manager_id INTEGER,
--     role_id INTEGER,
--     CONSTRAINT fk_role FOREIGN KEY (role_id)
--     REFERENCES role(id) ON DELETE NOT NULL
--     -- CONSTRAINT fk_manager FOREIGN KEY (manager_id)
--     -- REFERENCES employee(id) ON DELETE SET NULL
-- );


