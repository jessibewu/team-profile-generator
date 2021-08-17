const Intern = require("../lib/Intern");

test("set School name", () => {
    const testSchool = "Baylor";
    const employee = new Intern("Jose", 1, "test@hotmail.com", testSchool);
    expect(employee.school).toBe(testSchool);
});

test("get School name via getSchool()", () => {
    const testSchool = "Baylor";
    const employee = new Intern("Jose", 1, "test@hotmail.com", testSchool);
    expect(employee.getSchool()).toBe(testSchool);
});

test("get Intern role via getRole()", () => {
    const testRole = "Intern";
    const employee = new Intern("Joseph", 1, "test@hotmail.com", "Baylor");
    expect(employee.getRole()).toBe(testRole);
});