interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface printTeacherFunction {
  (firstName:string, lastName:string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const formatLastName =
    lastName.charAt(0).toUpperCase() + lastName.substring(1);
  return `${firstLetter}. ${formatLastName}`;
};

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: true,
  lastName: 'Doe',
  location: 'London',
  numberOfReports: 17
};

console.log(teacher3);
console.log(printTeacher('John', 'Doe'));

interface Student {
  new (firstName:string, lastName:string): StudentClass;
}

class StudentClass {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName():string {
    return this.firstName;
  }
}

const student = new StudentClass('John', 'Doe');
console.log(student.displayName());
console.log(student.workOnHomework());
