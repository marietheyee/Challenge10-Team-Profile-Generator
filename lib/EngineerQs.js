module.exports = [{
    type: "input",
    name: "engineerName",
    message: "Enter your engineer's name:",
    validate: engineerNameInput => {
        if(engineerNameInput && engineerNameInput.trim().length > 0){
            return true;
        }else {
            console.log("Input your engineer's name:");
            return false;
        };
    }

},

{
    type: "input",
    name: "engineerId",
    message: "Enter your engineer's employee ID:",
    validate: engineerIdInput => {
        if (engineerIdInput && engineerIdInput.trim().length > 0) {
            return true;
        } else {
            console.log("Enter your engineer's employee ID:");
            return false;
        }
    }
},
{
    type: "input",
    name: "engineerEmail",
    message: "Enter your engineer's Email:",
    validate: engineerEmailInput => {
        if (engineerEmailInput && engineerEmailInput.trim().length > 0) {
            return true;
        } else {
            console.log("Enter your engineer's Email:");
            return false;
        }
    }
},
{
    type: "input",
    name: "engineerGithub",
    message: "Enter your engineer's Github:",
    validate: engineerGithub=> {
        if (engineerGithub && engineerGithub.trim().length > 0) {
            return true;
        } else {
            console.log("Enter your engineer's Github:");
            return false;
        }
    }
}
]
