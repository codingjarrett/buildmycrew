const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("getName", () => {
        it("should return name of manager", () => {
            const manager = new Manager('Jack Sparrow', '5252', 'jacksparrow@email.com', '555-0122')
            const str = 'Jack Sparrow';
            const result = manager.getName();

            expect(result).toBe(str);
        });
    });

    describe("getId", () => {
        it("should return employee ID of manager", () => {
            const manager = new Manager('Jack Sparrow', '5252', 'jacksparrow@email.com', '555-0122')
            const str = '5252';
            const result = manager.getId();

            expect(result).toBe(str);
        });
    });

    describe("getEmail", () => {
        it("should return email of manager", () => {
            const manager = new Manager('Jack Sparrow', '5252', 'jacksparrow@email.com', '555-0122')
            const str = 'jacksparrow@email.com';
            const result = manager.getEmail();

            expect(result).toBe(str);
        });
    });

    describe("getOfficeNumber", () => {
        it("should return the manager's office number", () => {
            const manager = new Manager('Jack Sparrow', '5252', 'jacksparrow@email.com', '555-0122')
            const str = '555-0122';
            const result = manager.getOfficeNumber();

            expect(result).toBe(str);
        });
    });

    describe("getRole", () => {
        it("should return Manager", () => {
            const str = 'Manager'
            const result = new Manager().getRole();

            expect(result).toBe(str);
        });
    });
});
