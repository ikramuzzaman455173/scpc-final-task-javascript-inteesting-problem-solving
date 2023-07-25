/* Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. */

// Example Input: "hello world" Example Output: "dlrow olleh"
console.log(`Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method?`);
function reverseStr(str) {
  let reversedStr = ""
  const myStr = str.toString().toLowerCase()
  for (let i = str.length-1; i >=0; i--){
    reversedStr+=myStr[i]
  }
  console.log(`Input:${myStr} and The Output Is: ${reversedStr} \n`)
}
reverseStr("Hello World") //Output : dlroW llhoe

/* Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. */

// Example Input: [2, -5, 10, -3, 7] Example Output: 19
console.log(`Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array?`,);

function sumPositiveNum(ary) {
  let myAry = ary.length
  let sum = 0
  let positiveAry=[]
  for (let i = 0; i < myAry; i++){
    if (i % 2 === 0) {
      sum += ary[i]
      positiveAry.push(ary[i])
    }
  }
  console.log(`Main Ary:${ary} and this ary positive number index array is:${positiveAry} or this ary posite number total sum is:${sum} \n`)
}
sumPositiveNum([2, -5, 10, -3, 7])

/* Task 3: Write a JavaScript program to find the most frequent element in an array and return it. */

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3
console.log(`Task 3: Write a JavaScript program to find the most frequent element in an array and return it?`);
// let ary = [3, 5, 2, 5, 3, 3, 1, 4, 5]
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
console.log("Most frequent element:", mostFrequent,'\n'); // Output: 3

/* Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers. */

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)
console.log(`Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers ?`);
function findTwoNumbersWithSum(sortedArray, target) {
  const numToIndexMap = {};

  for (let i = 0; i < sortedArray.length; i++) {
    const complement = target - sortedArray[i];

    if (complement in numToIndexMap) {
      return [numToIndexMap[complement], i];
    }

    numToIndexMap[sortedArray[i]] = i;
  }

  return [];
}

// Example usage:
const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result = findTwoNumbersWithSum(sortedArray, targetValue);
console.log("Indices of the two numbers:", result,'\m');

/* Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation. */
console.log(`Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation? \n`);

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
    return("Invalid operator");
  }
}

const number1 = 10;
const number2 = 5;
const operation = '+';
const results = calculator(number1, operation, number2);
console.log("Result:", results);


/* Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
 */
console.log(`Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters ?`);

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
console.log("Random Password:", randomPassword,'\n');


/* Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value. */


/* Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number. */
console.log(`Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number ? \n`);
function findSecondAry(arr) {
	arr.sort((a,b) => a-b);
		const secondMin = arr[1];
		console.log(secondMin);
}
findSecondAry([6, 3, 5, 2,1, 9]);

