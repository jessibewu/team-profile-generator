const Engineer = require("../lib/Engineer");

test("set GitHub username", () => {
    const testUsername = "GitHubUser";
    const employee = new Engineer("Jose", 1, "test@hotmail.com", testUsername);
    expect(employee.github).toBe(testUsername);
});

test("get GitHub account via getGitHub()", () => {
    const testAccount = "GitHubUser";
    const employee = new Engineer("Jose", 1, "test@hotmail.com", testAccount);
    expect(employee.getGitHub()).toBe(testAccount);
});

test("get Engineer role via getRole()", () => {
    const testRole = "Engineer";
    const employee = new Engineer("Jose", 1, "test@hotmail.com", "GitHubUser");
    expect(employee.getRole()).toBe(testRole);
});