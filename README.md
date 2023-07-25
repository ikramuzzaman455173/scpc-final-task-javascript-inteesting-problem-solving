<h1 aling="center">Solve Final Task SCPC Interesting Problem Solving In Javascript:)</h1>


Task 1: Create a function to reverse a string without using the built-in reverse() method.
```javascript
function reverseStr(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// Example usage:
const inputString = "hello world";
const reversedString = reverseStr(inputString);
console.log(reversedString); // Output: "dlrow olleh"
```

Task 2: Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
```javascript
function sumPositiveNum(ary) {
  let sum = 0;
  for (let i = 0; i < ary.length; i++) {
    if (ary[i] > 0) {
      sum += ary[i];
    }
  }
  return sum;
}

// Example usage:
const inputArray = [2, -5, 10, -3, 7];
const sumOfPositive = sumPositiveNum(inputArray);
console.log(sumOfPositive); // Output: 19
```

Task 3: Find the most frequent element in an array and return it.
```javascript
function findMostFrequentElement(arr) {
  const frequency = {};
  let mostFrequentElement;
  let highestFrequency = 0;

  arr.forEach((element) => {
    frequency[element] = (frequency[element] || 0) + 1;

    if (frequency[element] > highestFrequency) {
      highestFrequency = frequency[element];
      mostFrequentElement = element;
    }
  });

  return mostFrequentElement;
}

// Example usage:
const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = findMostFrequentElement(inputArray);
console.log(mostFrequent); // Output: 3
```

Task 4: Create a function that finds two numbers in a sorted array that add up to the target value and returns the indices of the two numbers.
```javascript
function findTwoNumbersWithSum(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left < right) {
    const sum = sortedArray[left] + sortedArray[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

// Example usage:
const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result = findTwoNumbersWithSum(sortedArray, targetValue);
console.log(result); // Output: [1, 2]
```

Task 5: Implement a simple JavaScript calculator that takes two numbers and an operator as input and returns the result of the operation.
```javascript
function calculator(num1, operator, num2) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    return num1 / num2;
  } else {
    return "Invalid operator";
  }
}

// Example usage:
const number1 = 10;
const number2 = 5;
const operation = '+';
const result = calculator(number1, operation, number2);
console.log(result); // Output: 15
```

Task 6: Generate a random password of a specified length with a mix of uppercase letters, lowercase letters, numbers, and special characters.
```javascript
const generateRandomPassword = (length) => {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numericChars = '0123456789';
  const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  const allChars = uppercaseChars + lowercaseChars + numericChars + specialChars;
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
};

// Example usage to generate a random password of length 12:
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);
```

Task 8: Find the second smallest element in an array of numbers.
```javascript
function findSecondSmallest(arr) {
  arr.sort((a, b) => a - b);
  const secondMin = arr[1];
  return secondMin;
}

// Example usage:
const inputArray = [6, 3, 5, 2, 1, 9];
const secondSmallest = findSecondSmallest(inputArray);
console.log(secondSmallest); // Output: 2
```