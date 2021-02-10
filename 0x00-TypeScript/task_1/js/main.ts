interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [propName: string]: any;
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

interface Directors extends Teacher {
  numberOfReports: number;
}

/* eslint-disable @typescript-eslint/class-name-casing */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printFullName(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

export const printTeacher: printTeacherFunction = printFullName;


/* eslint-enable @typescript-eslint/class-name-casing */

/*
 const teacher1: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log('teacher1', teacher1);

console.log('Teacher: ', printTeacher('Joe', 'Doe'))

*/

