const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("set Office Number", () => {
    const testOfficeNum = 55;
    const employee = new Manager("Jose", 1, "test@hotmail.com", testOfficeNum);
    expect(employee.officeNumber).toBe(testOfficeNum);
});

test("get Office Number via getOffice()", () => {
    const testValue = 61;
    const employee = new Manager("Jose", 1, "test@hotmail.com", testValue);
    expect(employee.getOfficeNumber()).toBe(testValue);
});

test("get Manager role via getRole()", () => {
    const testValue = "Manager";
    const employee = new Manager("Jose", 1, "test@hotmail.com");
    expect(employee.getRole()).toBe(testValue);
});