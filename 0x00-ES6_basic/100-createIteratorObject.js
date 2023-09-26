export default function createIteratorObject(report) {
  let departmentIndex = 0;
  let employeeIndex = 0;

  function* iterateEmployees() {
    const departments = Object.keys(report.allEmployees);

    while (departmentIndex < departments.length) {
      const currentDepartment = departments[departmentIndex];
      const employees = report.allEmployees[currentDepartment];

      if (employeeIndex < employees.length) {
        yield employees[employeeIndex];
        employeeIndex++;
      } else {
        departmentIndex++;
        employeeIndex = 0;
      }
    }
  }

  return {
    [Symbol.iterator]: () => iterateEmployees(),
  };
}
