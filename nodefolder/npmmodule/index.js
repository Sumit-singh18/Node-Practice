import chalk from 'chalk';

console.log(chalk.blue.italic("hello worls"));
console.log(chalk.blue.underline("hello worls"));
console.log(chalk.blue.inverse("hello worls"));
console.log(chalk.green.inverse("hello worls"));


// validation of form using module
import validator from 'validator';
const  val = validator.isEmail('Sumit@Sumit.com'); 
console.log(val ? chalk.green.inverse(val): chalk.red.inverse(val))