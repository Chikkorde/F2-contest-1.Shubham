/** @format */

let students = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];



function PrintStudentswithMap() {
  //Write your code here , just console.log
  const filteredStudents = students.filter(student => student.marks > 50);
  const mappedStudents = filteredStudents.map(student => ({
    id: student.id,
    name: student.name,
    age: student.age,
    marks: student.marks
  }));
  console.log(mappedStudents);
 
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log

  const filteredStudents = students.filter(student => student.marks > 50);
  filteredStudents.forEach(student => {
    console.log(student);
  });
}

function addData() {
  //Write your code here, just console.log
  const newStudent = { id: 4, name: "susan", age: 20, marks: 45 };
  students.push(newStudent);
  console.log(newStudent);

}

function removeFailedStudent() {
  //Write your code here, just console.log

  const filteredStudents = students.filter(student => student.marks >= 50);
  students.length = 0;
  Array.prototype.push.apply(students, filteredStudents);
  console.log(students);
}

function concatenateArray() {
  //Write your code here, just console.log

  const students2 = [
    { id: 4, name: "sam", age: 18, marks: 60 },
    { id: 5, name: "sophie", age: 20, marks: 75 },
    { id: 6, name: "lisa", age: 19, marks: 40 }
  ];
  const combinedArray = students.concat(students2);
  console.log(combinedArray);
}



