function add(numbers) {  
  if (numbers === '') return 0;
  //return parseInt(numbers, 10);
  return numbers.split(',').reduce((sum, num) => sum + parseInt(num, 10), 0);

}

module.exports = { add };
