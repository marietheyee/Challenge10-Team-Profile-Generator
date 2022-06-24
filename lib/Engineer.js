const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);
        this.githubUsername = githubUsername;
        this.role = "Engineer";
    };

   Engineer() {
        return this.Engineer;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Engineer;