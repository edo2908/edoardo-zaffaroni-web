const num1 = process.argv[2];
const num2 = process.argv[4];
const operator = process.argv[3];
const result = eval(`${num1} ${operator} ${num2}`);
console.log(result);
