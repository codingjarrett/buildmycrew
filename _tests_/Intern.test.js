const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("getName", () => {
        it("should return name of intern", () => {
            const intern = new Intern('Jack Sparrow', '5252', 'jacksparrow@email.com', 'Tropics Academy')
            const str = 'Jack Sparrow';
            const result = intern.getName();

            expect(result).toBe(str);
        });
    });

    describe("getId", () => {
        it("should return employee ID of intern", () => {
            const intern = new Intern('Jack Sparrow', '5252', 'jacksparrow@email.com', 'Tropics Academy')
            const str = '5252';
            const result = intern.getId();

            expect(result).toBe(str);
        });
    });

    describe("getEmail", () => {
        it("should return email address of intern", () => {
            const intern = new Intern('Jack Sparrow', '5252', 'jacksparrow@email.com', 'Tropics Academy')
            const str = 'jacksparrow@email.com';
            const result = intern.getEmail();

            expect(result).toBe(str);
        });
    });

    describe("getSchool", () => {
        it("should return school intern attends", () => {
            const intern = new Intern('Jack Sparrow', '5252', 'jacksparrow@email.com', 'Tropics Academy')
            const str = 'Tropics Academy';
            const result = intern.getSchool();

            expect(result).toBe(str);
        });
    });

    describe("getRole", () => {
        it("should return Intern", () => {
            const str = 'Intern'
            const result = new Intern().getRole();

            expect(result).toBe(str);
        });
    });
});
