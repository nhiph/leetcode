var countStudents = function (students, sandwiches) {
  let studentMap = {};

  for (const student of students) {
    studentMap[student] = (studentMap[student] || 0) + 1;
  }

  for (const san of sandwiches) {
    if (studentMap[san] > 0) {
      studentMap[san]--;
    } else if (!studentMap[san]) {
      break;
    }
  }

  return Object.values(studentMap).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
console.log(countStudents([1, 1], [0, 1]));
