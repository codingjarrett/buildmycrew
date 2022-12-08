const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("getName", () => {
        it("should return name of employee", () => {
            const employee = new Employee('Jack Sparrow', '5252', 'jacksparrow@email.com')
            const str = 'Jack Sparrow';
            const result = employee.getName();

            expect(result).toBe(str);
        });
    });

    describe("getId", () => {
        it("should return employee ID", () => {
            const employee = new Employee('Jack Sparrow', '5252', 'jacksparrow@email.com')
            const str = '5252';
            const result = employee.getId();

            expect(result).toBe(str);
        });
    });

    describe("getEmail", () => {
        it("should return email of employee", () => {
            const employee = new Employee('Jack Sparrow', '5252', 'jacksparrow@email.com')
            const str = 'jacksparrow@email.com';
            const result = employee.getEmail();

            expect(result).toBe(str);
        });
    });

    describe("getRole", () => {
        it("should return Employee", () => {
            const str = 'Employee'
            const result = new Employee().getRole();

            expect(result).toBe(str);
        });
    });
});
