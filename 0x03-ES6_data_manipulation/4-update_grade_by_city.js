export default function updateStudentGradeByCity(studentList, city, newGrades){
  // Filter students for the specified city
  const studentsInCity = studentList.filter(
    (student) => student.location === city
  );

  // Map the students to update their grades
  const updatedStudents = studentsInCity.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

    if (gradeObj) {
      return {
        ...student,
        grade: gradeObj.grade,
      };
    } else {
      return {
        ...student,
        grade: 'N/A',
      };
    }
  });

  return updatedStudents;
};

