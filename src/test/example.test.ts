import {Example} from "../main/example";

describe('example test', () => {
    it("should give sum of a + b when adding a and b", () => {
        let example: Example = new Example();
        expect(example.add(1, 2)).toBe(3);
    })
    
    /*it("should give sum of a + b when adding a and b", () => {
        let example: Example = new Example();
        expect(example.add(1, 3)).toBe(3);
    })*/
})