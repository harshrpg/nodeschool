// BABY STEPS
// Program that accepts one or more command line arguments
const arguments = process.argv;
const input_num = arguments.slice(2, arguments.length);
function getSum(total, num) {
  return Number(total) + Number(num);
}
console.log(input_num.reduce(getSum));
