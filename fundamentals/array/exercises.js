// https://www.crocoder.dev/blog/map-filter-reduce-exercises/

// Exercise 1: Square the value of every element in the array=
// input = [1, 2, 3, 4, 5]
// output = [1, 4, 9, 16, 25];

const input1 = [1, 2, 3, 4, 5];
const res1 = input1.map((num) => Math.pow(num, 2));
console.log("res1", res1);

// Exercise 2: Sum of every positive element
// input = [1, -4, 12, 0, -3, 29, -150];
// output = 42;

const input2 = [1, -4, 12, 0, -3, 29, -150];
const res2 = input2.reduce((memo, cur) => {
  if (cur > 0) memo += cur;
  return memo;
}, 0);

console.log("res2", res2);

// Exercise 3: Calculate median and mean
// input = [12, 46, 32, 64]
// output = { mean: 38.5, median: 39 }
const input3 = [12, 46, 32, 64];
const sortedInput3 = input3.sort((pre, post) => pre - post);
const medianIdx = Math.floor(sortedInput3.length / 2);
const median = sortedInput3[medianIdx];

const total3 = sortedInput3.reduce((memo, cur) => {
  return (memo += cur);
}, 0);

const res3 = sortedInput3.reduce(
  (memo, cur) => {
    return {
      ...memo,
      median,
      mean: total3 / sortedInput3.length,
    };
  },
  { mean: 0, median: 0 }
);

console.log("res3", res3);

// Exercise 4: Get name initials
// input = "George Raymond Richard Martin";
// output = "GRRM"

const input4 = "George Raymond Richard Martin";
const input4Words = input4.split(" ");
const res4 = input4Words.map((word) => word[0]).join("");
console.log("res4", res4);

// Exercise 5: Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

const input5 = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

function findMinMax(array) {
  let min = array[0].age;
  let max = array[0].age;
  for (let i = 0; i < array.length; i++) {
    if (min > array[i].age) min = array[i].age;
    if (max < array[i].age) max = array[i].age;
  }
  return {
    min,
    max,
  };
}
const { min, max } = findMinMax(input5);
const res5 = [min, max, max - min];
console.log("res5", res5);

// Exercise 6: Numeronyms
// const input = "Every developer likes to mix kubernetes and javascript";
// "E3y d7r l3s to mix k8s and j8t";

const input6 = "Every developer likes to mix kubernetes and javascript";
const input6Words = input6.split(" ");
const res6 = input6Words
  .map((word) => {
    if (word.length < 4) return word;
    const firstChar = word[0]; // word.slice(1)
    const midChar = word.slice(1, -1);
    const lastChar = word.slice(-1);

    return `${firstChar}${midChar.length}${lastChar}`;
  })
  .join(" ");

console.log("res6", res6);

// Exercise 7: n! with Map and Reduce
// const input = 6;
// output = 720;

const input7 = 6;
function factorialize(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
}
const res7 = factorialize(input7);
console.log("res7", res7);

const input7Numbers = new Array(input7).fill(null).map((val, idx) => idx + 1);
const res72 = input7Numbers.reduce((memo, cur) => {
  return memo * cur;
}, 1);

console.log("res72", res72);

// Exercise 8: Count elements in array of arrays

const input8 = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];
const input8Flat = input8.flat().reduce((memo, cur) => {
  return {
    ...memo,
    [cur]: cur.length,
  };
}, {});

console.log("input8Flat", input8Flat);

// Exercise 9: High performing students

const input9 = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] },
];

function calculateAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

const res9 = input9
  .map(({ name, scores }) => ({
    name,
    average: calculateAverage(scores),
  }))
  .filter((student) => student.average > 90);

console.log("res9", res9);

// Exercise 10: High Priced Product Categories
const input10 = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];

const categories = input10
  .map((itm) => itm.category)
  .filter((cate, idx, self) => {
    return self.indexOf(cate) == idx;
  });

const res10 = categories
  .map((cate) => {
    const items = input10.filter((product) => product.category === cate);
    const sumItemsPrice = items.reduce((memo, cur) => {
      return (memo += cur.price);
    }, 0);
    const averageItemsPrice = sumItemsPrice / items.length;

    return {
      cate,
      average: averageItemsPrice,
    };
  })
  .filter((product) => product.average > 50);

console.log("res10", res10);

// Excercie 11: HR VS IT Department

const input11 = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];

const departments = input11
  .map((employee) => employee.department)
  .filter((depart, idx, self) => {
    return self.indexOf(depart) == idx;
  });

const res11 = departments
  .map((department) => {
    const employeesInDepartment = input11.filter(
      (employee) => employee.department === department
    );
    const totalSalary = employeesInDepartment.reduce((memo, cur) => {
      return (memo += cur.salary);
    }, 0);
    const averageSalary = Math.round(
      totalSalary / employeesInDepartment.length
    );
    return {
      department,
      average: averageSalary,
    };
  })
  .filter((team) => team.average > 65000);

console.log("res11", res11);

// exercise 12:

let input12 = [
  { make: "Kia", model: "Sonet", price: 15000 },
  { make: "Kia", model: "Seltos", price: 20000 },
  { make: "Kia", model: "Sorento", price: 25000 },
  { make: "Audi", model: "A1", price: 30000 },
  { make: "Audi", model: "A2", price: 27000 },
  { make: "Audi", model: "A7", price: 32000 },
  { make: "Audi", model: "A7", price: 32000 },
  { make: "Mercedes-Benz", model: "A Class", price: 30000 },
  { make: "Mercedes-Benz", model: "B Class", price: 34000 },
  { make: "Mercedes-Benz", model: "C Class", price: 28000 },
];

const makes = input12
  .map((vehicle) => vehicle.make)
  .filter((make, idx, self) => {
    return self.indexOf(make) == idx;
  });

const res12 = makes.map((make) => {
  const vehicleSameMake = input12.filter((vehicle) => vehicle.make === make);
  const totalPrice = vehicleSameMake.reduce((memo, vehicle) => {
    return memo + vehicle.price;
  }, 0);
  const averagePrice = (totalPrice / vehicleSameMake.length).toFixed(2);

  return {
    make,
    average: averagePrice,
  };
});

console.log("res12", res12);

function swap(array, idx1, idx2) {
  var temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
  return array;
}

console.log(swap([5, 3, 8, 4, 6], 1, 3));
console.log(swap([5, 3, 8, 4, 6], 0, 4));
