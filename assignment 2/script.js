const students = [
  { id: 101, name: "Aman", marks: 82, course: "Java" },
  { id: 102, name: "Priya", marks: 95, course: "Python" },
  { id: 103, name: "Rahul", marks: 67, course: "Java" },
  { id: 104, name: "Neha", marks: 76, course: "Web" },
  { id: 105, name: "Rohan", marks: 88, course: "Python" }
];

students.push({ id: 106, name: "Simran", marks: 91, course: "Java" });
console.log(students);

const removedLast = students.pop();
console.log(removedLast);

students.unshift({ id: 100, name: "Ankit", marks: 80, course: "Web" });
console.log(students);

const removedFirst = students.shift();
console.log(removedFirst);

const index = students.findIndex(student => student.id === 103);
students.splice(index, 1, {
  id: 107,
  name: "Karan",
  marks: 78,
  course: "Java"
});
console.log(students);

const firstThree = students.slice(0, 3);
console.log(firstThree);

for (const student of students) {
  console.log(`${student.name} - ${student.course} - ${student.marks}`);
}

students.forEach(student => {
  console.log(student.name);
});

const studentNames = students.map(student => student.name);
console.log(studentNames);

const topStudents = students.filter(student => student.marks >= 80);
console.log(topStudents);

const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
console.log("Total Marks =", totalMarks);

const averageMarks = totalMarks / students.length;
console.log("Average =", averageMarks);

const ascending = [...students].sort((a, b) => a.marks - b.marks);
ascending.forEach(student => console.log(student.marks));

const descending = [...students].sort((a, b) => b.marks - a.marks);
descending.forEach(student => console.log(student.marks));