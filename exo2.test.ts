import { calc } from './exo2';

describe('Calculator', () => { 
    test('1 +1 = 2 ', () => {
        expect(calc(1,1)).toBe(2);
    })
 })