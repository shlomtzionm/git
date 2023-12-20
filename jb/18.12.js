let stud = {
  firstName: "guy",
  age: 24,
  isHappy: true,
};

let stud2 = {
  firstName: "aviv",
  age: 2,
  isHappy: true,
};

let stud3 = {
  firstName: "kfir",
  age: 2,
  isHappy: false,
};

let students = [stud, stud2, stud3];
let bigger = 0;
for (i = 0; i < students.length; i++) {
  if (students[i].age > bigger) {
    bigger = students[i].age;
  }
}
console.log(bigger);
