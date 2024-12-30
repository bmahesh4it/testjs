function add(numbers) {
  if (numbers === '') return 0;
  
  const negativeNumbers = [];
  if (numbers.startsWith('//')) {
    const delimiter = numbers[2];
    numbers = numbers.slice(4);  // Skip the "//;\n"
    numbers = numbers.replace(new RegExp(delimiter, 'g'), ',');  // Replace custom delimiter with comma
  }
  
  const numList = numbers.split(',');
  
  numList.forEach(num => {
    const number = parseInt(num, 10);
    if (number < 0) negativeNumbers.push(num);
  });

  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
  }

  return numList.reduce((sum, num) => sum + parseInt(num, 10), 0);
  
}

module.exports = { add };
