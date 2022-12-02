import { studGrade } from './exo6';

describe('Student average grade.', () => { 
    test("Jimmy's grades : 5,3,4=  Jimmy: 4 - Catastrophique!", () => {
        expect(studGrade("Jimmy", 5,3,4)).toBe('Jimmy: 4 - Catastrophique!');
    })
    test("Jimmy's grades : 5,3,4=  Jimmy: 4 - Catastrophique!", () => {
        expect(studGrade("Jimmy", 5,6,7)).toBe('Jimmy: 6 - Insuffisant!');
    })
    test("Jimmy's grades : 5,3,4=  Jimmy: 4 - Catastrophique!", () => {
        expect(studGrade("Jimmy", 11,12,13)).toBe('Jimmy: 12 - Passable!');
    })
    test("Jimmy's grades : 5,3,4=  Jimmy: 4 - Catastrophique!", () => {
        expect(studGrade("Jimmy", 15,16,17)).toBe('Jimmy: 16 - Bien!');
    })
    test("Jimmy's grades : 5,3,4=  Jimmy: 4 - Catastrophique!", () => {
        expect(studGrade("Jimmy", 19,19,19)).toBe('Jimmy: 19 - Très bien!');
    })
    test("Jimmy's grades : 5,3,4=  Jimmy: 4 - Catastrophique!", () => {
        expect(studGrade("Jimmy", 21,21,21)).toBe('Jimmy: 21 - /! Note non valide! /! ');
    })
 })