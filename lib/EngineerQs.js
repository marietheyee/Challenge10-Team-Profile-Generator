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

}]
