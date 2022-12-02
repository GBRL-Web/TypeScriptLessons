import { getMax } from './exo4';

describe('Get max of 3', () => { 
    test('Get max of : 14, 13, 15 = 15 ', () => {
        expect(getMax(14,13,15)).toBe(15);
    })
 })