const Employee = require("../lib/Employee");

test("creat new Employee", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("set new Employee name", () => {
    const name = "Joseph";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("set new Employee ID", () => {
    const testID = 100;
    const employee = new Employee("Joseph", testID);
    expect(employee.id).toBe(testID);
});

test("set new Employee email", () => {
    const testEmail = "test@hotmail.com";
    const employee = new Employee("Joseph", 1, testEmail);
    expect(employee.email).toBe(testEmail);
});

test("get Employee name via getName()", () => {
    const testName = "Joseph";
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});

test("get Employee ID via getId()", () => {
    const testID = 30;
    const employee = new Employee("Joseph", testID);
    expect(employee.getId()).toBe(testID);
});

test("get Employee email via getEmail()", () => {
    const testEmail = "test@hotmail.com";
    const employee = new Employee("Joseph", 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});

test("get Employee role via getRole()", () => {
    const testRole = "Employee";
    const employee = new Employee("Joseph", 1, "test@hotmail.com");
    expect(employee.getRole()).toBe(testRole);
});