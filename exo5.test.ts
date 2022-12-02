import { getHighest } from './exo5';

describe('Get max of multiple nr', () => { 
    test('3,5,1,2,4,9,10 = max 10 ', () => {
        expect(getHighest(3,5,1,2,4,9,10)).toBe(10);
    })
 })