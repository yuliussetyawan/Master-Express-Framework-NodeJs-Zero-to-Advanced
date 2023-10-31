const express = require("express");
const router = express.Router();
const moment = require("moment");
const employees = require("../../Employee");

// retrive all employees
router.get("/", (req, res) => {
  res.json(employees);
});

// retrieve single employee
router.get("/:name", (req, res) => {
  const checkExists = employees.some(
    (employee) => employee.name === req.params.name
  );
  if (checkExists) {
    res.json(employees.filter((employee) => employee.name === req.params.name));
  } else {
    res.status(400).json({
      msg: `Employee ${req.params.name} doesn't exist`,
    });
  }
});

// create employee
router.post("/", (req, res) => {
  const newEmployee = {
    name: req.body.name,
    email: req.body.email,
    // generate age between 18 - 100
    age: Math.round(Math.random() * (100 - 18) + 18),
    added: `${moment().format()}`,
  };

  if (!newEmployee.name || !newEmployee.email) {
    res.status(400).json({
      msg: `Please include both name and email `,
    });
  } else {
    employees.push(newEmployee);
    res.json(employees);
  }
});

// update employee
router.put("/:name", (req, res) => {
  const checkExists = employees.some(
    (employee) => employee.name === req.params.name
  );
  if (checkExists) {
    const updateEmployee = req.body;
    employees.forEach((employee) => {
      if (employee.name === req.params.name) {
        // If updateEmployee is true, the value of updateEmployee.name is assigned to the variable employee.name
        // If updateEmployee is false, the value of employee.name remains unchanged
        employee.name = updateEmployee ? updateEmployee.name : employee.name;
        res.json({ msg: `Employee updated`, employee });
      }
    });
  } else {
    res.status(400).json({ msg: `Employee ${req.params.name} doesn't exist` });
  }
});

// delete employee
router.delete("/:name", (req, res) => {
  const checkExists = employees.some(
    (employee) => employee.name === req.params.name
  );
  if (checkExists) {
    res.json({
      msg: "Employee Deleted",
      employee: employees.filter(
        (employee) => employee.name !== req.params.name
      ),
    });
  } else {
    res.status(400).json({ msg: `Employee ${req.params.name} doesn't exist` });
  }
});

module.exports = router;
