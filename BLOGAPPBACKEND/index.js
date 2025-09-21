// const calculator = require('./calculator');

// console.log('Calculator Module Test');
// console.log(calculator);

// const addResult = calculator.add(5, 3);
// const subtractResult = calculator.subtract(5, 3);
// const multiplyResult = calculator.multiply(5, 3);
// const divideResult = calculator.divide(5, 3);

// console.log(`Multiplication Result: ${multiplyResult}`);
// console.log(`Division Result: ${divideResult}`);
// console.log(`Addition Result: ${addResult}`);
// console.log(`Subtraction Result: ${subtractResult}`);

const express = require('express');
const app = express();
const config = require('./src/configs/config');

app.use(express.json());

const port = config.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
