const { default: test } = require("test");
const Employee = require("../lib/Employee");

test("Create an employee object.", () => {
    const employee = new Employee("Marie", 1052, "marie@marie.com");

    expect(typeof(employee)).toBe("object");
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("check to see if I can getName() or not.", () => {
    const testName = "Marie";
    const employee = newEmployee(testName);

    expect(employee.getName()).toBe(testName);
});

test("check to see if I can getId() or not.", () => {
    const testId = 1052;
    const employee = newEmployee("Marie", testId);

    expect(employee.getId()).toBe(testId);
});

test("Check to see if I can getEmail() or not.", () => {
    const testEmail = "marie@email.com";
    const employee = new Employee("Marie", 1052, testEmail);

    expect(employee.getEmail()).toBe(testEmail);
});

test("Use getRole() to return\"Employee\" as role.",() => {
    const testRole = "Employee";
    const employee = newEmployee("Marie", 626, "marie@email.com")

    expect(employee.getRole()).toBe(testRole);

});
