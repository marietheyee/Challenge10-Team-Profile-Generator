const { default: test } = require("test");
const Manager = require("./lib/Manager");

test ("setting manager's office number.", () => {
    const testOfficeNumber = 626;
    const manager = new Manager("Marie", 1052, "marie@email.com", testOfficeNumber);

    expect (manager.officeNumber).toBe(testOfficeNumber);
});

test("Use getRole() to return \"manager\" as role.", () => {
    const testRole = "Manager";
    const manager = new Manager("Marie", 1052, "marie@email.com", 626);

    expect(manager.getRole()).toBe(testRole);
});
