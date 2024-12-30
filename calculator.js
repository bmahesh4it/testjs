function add(numbers) {
  if (numbers === '') return 0;
  
  const negativeNumbers = [];
  
  // Check if the string starts with the custom delimiter syntax
  if (numbers.startsWith('//')) {
    const delimiter = numbers[2];  // Extract the delimiter
    numbers = numbers.slice(4);  // Skip the "//;\n"
    numbers = numbers.replace(new RegExp(delimiter, 'g'), ',');  // Replace custom delimiter with commas
  }
  
  // Replace newlines with commas (add this step to handle newline separation)
  numbers = numbers.replace(/\n/g, ',');  // Replace all newlines with commas
  
  const numList = numbers.split(',');  // Split by commas
  
  // Check for negative numbers
  numList.forEach(num => {
    const number = parseInt(num, 10);
    if (number < 0) negativeNumbers.push(num);
  });

  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
  }

  // Return the sum of the numbers
  return numList.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = { add };
