module.exports = [{
    type: "input",
    name: "internName",
    message: "Enter your intern's name:",
    validate: internNameInput => {
        if(internNameInput && internNameInput.trim().length > 0) {
            return true;
        } else {
            console.log("Enter your intern's name:");
            return false;
        };
    }
    },
{
    type: "input",
    name: "internId",
    message: "Enter your intern's employee ID:",
    validate: internIdInput => {
        if (internIdInput && internIdInput.trim().length > 0) {
            return true;
        } else {
            console.log("Enter your intern's employee ID:");
            return false;
        };
        }
    },
    {
        type: "input",
        name: "internEmail",
        message: "Enter your intern's email address.",
        validate: internEmailInput => {
            if (internEmailInput && internEmailInput.trim().length > 0) {
                if ( /^.+@.+\..+$/gi.test(internEmailInput)) {
                    return true;

                };
            } else {
                console.log("Enter your intern's email address:")
                return false;
            };
        }
    },
    {
        type: "input",
        name: "internSchool",
        message: "Enter your intern's school name:",
        validate: internSchoolInput => {
            if (internSchoolInput && internSchoolInput.trim().length > 0) {
                return true;
            } else {
                console.log("Enter your intern's school name:");
                return false;
            };
        }
    }];