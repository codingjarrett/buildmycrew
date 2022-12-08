const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("getName", () => {
        it("should return name of engineer", () => {
            const engineer = new Engineer('Jack Sparrow', '5252', 'jacksparrow@email.com', 'jacksparrow')
            const str = 'Jack Sparrow';
            const result = engineer.getName();

            expect(result).toBe(str);
        });
    });

    describe("getId", () => {
        it("should return employee ID of engineer", () => {
            const engineer = new Engineer('Jack Sparrow', '5252', 'jacksparrow@email.com', 'jacksparrow')
            const str = '5252';
            const result = engineer.getId();

            expect(result).toBe(str);
        });
    });

    describe("getEmail", () => {
        it("should return email of engineer", () => {
            const engineer = new Engineer('Jack Sparrow', '5252', 'jacksparrow@email.com', 'jacksparrow')
            const str = 'jacksparrow@email.com';
            const result = engineer.getEmail();

            expect(result).toBe(str);
        });
    });

    describe("getGithub", () => {
        it("should return GitHub username of engineer", () => {
            const engineer = new Engineer('Jack Sparrow', '5252', 'jacksparrow@email.com', 'jacksparrow')
            const str = 'jacksparrow';
            const result = engineer.getGitHub();

            expect(result).toBe(str);
        });
    });

    describe("getRole", () => {
        it("should return Engineer", () => {
            const str = 'Engineer'
            const result = new Engineer().getRole();

            expect(result).toBe(str);
        });
    });
});
