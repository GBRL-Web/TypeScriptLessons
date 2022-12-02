import { makePiramid } from './exo8';

describe('Make pyramid', () => { 
    test('*\n**\n***\n**\n*', () => {
        expect(makePiramid(3, "*")).toBe('\n*\n**\n***\n**\n*');
    })
 })