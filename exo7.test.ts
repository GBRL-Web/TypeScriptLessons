import { calc } from './exo7';

describe('Student average grade.', () => { 
    test("5 + 3 = 8", () => {
        expect(calc(5,3,'+')).toBe(8);
    })
    test("5 - 3 = 2", () => {
        expect(calc(5,3,'-')).toBe(2);
    })
    test("6 / 3 = 2", () => {
        expect(calc(6,3,'/')).toBe(2);
    })
    test("5 * 3 = 15", () => {
        expect(calc(5,3,'*')).toBe(15);
    })
 })