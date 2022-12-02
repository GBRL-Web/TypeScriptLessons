import {hello} from "./exo1";

describe('Hello name', () => { 
    test('Hello name', () => {
        expect(hello('James')).toBe('Hello James!');
    })
 })