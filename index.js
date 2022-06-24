const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");

const EmployeeQs = require("./lib/EmployeeQs");
const ManagerQs = require("./lib/ManagerQs");
const EngineerQs = require("./lib/EngineerQs");
const holdHtml = require("./lib/html-template");

let teamProfileArr = [];

const writeToFile = (holdHtmlArr) => {
    return new Promise ((resolve, reject) => {
        outputFileName = teamProfileArr[0].toLowerCase();
        outputFileName = outputFileName.replace(/ /g, "-");

        fs.writeFile(`./dist/${companyFileName}.html`, holdHtmlArr.join(""), function(err){
            if (err) {
                reject (err);
                return;
            };

            resolve({
                ok: true,
                message: "File created. Your output HTML file is in the 'dist' folder."
            });
        });    
    });
};    

function generateHtmlFile() {
    const holdHtmlArr = holdHtml.generateHtml(teamProfileArr);
    writeToFile(holdHtmlArr);
};

function addInternProfile() {
    inquirer.prompt(InternQs)
    .then (function(data) {
        const internName = data.internName;
        const internId = data.internId;
        const internEmail = data.internEmail;
        const internSchool = data.internSchool;
        const teamMember = new Intern (internName, internId, internEmail, internSchool);

        teamProfileArr.push(teamMember);

        addNonManagerTeamMember();
    });
};

function addEngineerProfile() {
    inquirer.prompt(EngineerQs)
    .then(function (data) {
        const engineerName = data.engineerName;
        const engineerId = data.engineerId;
        const engineerEmail = data.engineerEmail;
        const engineerGithubUsername = data.engineerGithubUsername;
        const teamMember = new Engineer (engineerName, engineerId, engineerEmail, engineerGithubUsername);

        teamProfileArr.push(teamMember)

        addnonManagerTeamMember();

    })
};

function addNonManagerTeamMember(){
    inquirer.prompt(addEmployeeQs)
    .then(function (data) {
        switch (data.menuChoices) {
            case "Add an Engineer Profile":
                addEngineerProfile();
                break;
                case "Add an Intern Profile":
                addInternProfile();
                break;
                case "Done Generating Profiles":
                generateHtmlFile();
                break;
        };
    })
};

function addManagerProfile() {
    inquirer.prompt(ManagerQs)
    .then(function(data) {
        const managerName = data.managerName;
        const managerId = data.managerId;
        const managerEmail = data.managerEmail;
        const managerOfficeNum = data.managerOfficeNum;
        const teamMember = newManager(managerName, managerId, managerEmail, managerOfficeNum);

        teamProfileArr.push(teamMember);

        addNonManagerTeamMember;
    });
};

function init() {
    inquirer.prompt([
        {
            message: "Welcome to the Team Profile Generator. Please enter your team name:",
            name: "teamName",
            validate: teamNameInput => {
                if (teamNameInput && teamNameInput.trim().length > 0) {
                    return true;
                } else {
                    console.log("Enter your team name:");
                    return false;
                };
            }
        }
    ])
    .then(function (data) {
        const teamName = data.teamName;
        teamProfileArr.push(teamName);
        addManagerProfile();
    });
};