const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const {run} = require("jest");

const employeeQuestions =[
    {
        type: "input",
        message: "What's the employee's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What's the employee's ID?",
        name: "id",
    },
    {
        type: "input",
        message: "what is the employee's email?",
        name: "email",
    }
];