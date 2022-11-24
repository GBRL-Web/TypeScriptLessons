/**
 * This function is responsible for calculating the average value of the grades.
 * @param grades - Grades to calculate.
 * @returns - Average grade score.
 */

function getMed(...grades: number[]): number {
  let sum: number = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

/**
 * Function to give a response in stirng format for the input grade.
 * @param grade - Grade to compare against a list of responses.
 * @returns - A string response to the average grade score.
 */

function getMessage(grade: number): string {
  if (grade >= 0 && grade <= 4) {
    return "Catastrophique!";
  } else if (grade >= 5 && grade <= 10) {
    return "Insuffisant!";
  } else if (grade >= 11 && grade <= 14) {
    return "Passable!";
  } else if (grade >= 15 && grade <= 18) {
    return "Bien!";
  } else if (grade >= 19 && grade <= 20) {
    return "Très bien!";
  } else {
    return "/! Note non valide! /! ";
  }
}

/**
 * Function to input a student name and his grades to get the average grade score and a text response to the average grade.
 * @param name - Name of the student.
 * @param grades - Grades, can input one or multiple values.
 * @returns - A string containing the name, average grade and a string response to the student's average grade.
 */

function studGrade(name: string, ...grades: number[]): string {
  let medGrade: number = getMed(...grades);
  return `${name}: ${medGrade} - ${getMessage(medGrade)}`;
}

console.log(studGrade("Gabriel", 12,13,15,12,14,12,14));
console.log(studGrade("Jean-Jaques", 20,20,20,20,20));