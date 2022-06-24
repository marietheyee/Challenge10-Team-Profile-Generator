module.exports = [{
    type: "input",
    name: "managerName",
    message: "Enter your manager's name:",
    validate: managerNameInput => {
        if (managerNameINput && managerNameInput.trim().length > 0) {
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
        if(managerIdInput && managerIdInput.trim().length > 0) {
            return true;
        } else {
            console.log("Enter your manager's employee ID:");
            return false;
        }
    }
}
]