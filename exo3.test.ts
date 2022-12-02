import { checkPrice } from './exo3';

describe('Profit/Deficit calculator', () => { 
    test('Prod price: 14, Sell price: 13 = Gain of 1 ', () => {
        expect(checkPrice(14,13)).toBe('You are at a gain of: $1');
    })
 })