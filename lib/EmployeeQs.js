module.exports = [
    {
        type: "list",
        name: "menuChoices",
        message: "Please choose an option below:",
        choices: ["Add an Engineer Profile", "Add a Manager Profile", "Done Generating Profiles"],
        validate: menuChoicesInput => {
            if (menuChoicesInput === "Add an Engineer Profile" || menuChoicesInput === "Add a Manager Profile") {
                return true;
            } else if 
                (menuChoicesInput === "Done Generating Profiles") {
                    return true;
                } else {
                    console.log("Please choose an option below:");
                    return false;
                };
            }
        }];