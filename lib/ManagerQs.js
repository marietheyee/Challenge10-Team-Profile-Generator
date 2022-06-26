module.exports = [{
    type: "input",
    name: "managerName",
    message: "Enter your manager's name:",
    validate: managerNameInput => {
        if (managerNameInput && managerNameInput.trim().length > 0) {
            return true;
        } else {
            console.log("Enter your manager's name:");
            return false;

        };
    }
},
{
    type: "input",
    name: "managerId",
    message: "Enter your manager's employee ID:",
    validate: managerIdInput => {
        if (managerIdInput && managerIdInput.trim().length > 0) {
            return true;
        } else {
            console.log("Enter your manager's employee ID:");
            return false;
        }
    }
},
{
    type: "input",
    name: "managerEmail",
    message: "Enter your manager's Email:",
    validate: managerEmailInput => {
        if (managerEmailInput && managerEmailInput.trim().length > 0) {
            return true;
        } else {
            console.log("Enter your manager's Email:");
            return false;
        }
    }
},
{
    type: "input",
    name: "managerOfficeNum",
    message: "Enter your manager's office number:",
    validate: managerOfficeNum=> {
        if (managerOfficeNum && managerOfficeNum.trim().length > 0) {
            return true;
        } else {
            console.log("Enter your manager's office number:");
            return false;
        }
    }
}
]