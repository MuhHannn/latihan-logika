const getLargestNumber = (arr) => {
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }

  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
};

const filterEvenNumber = (numbers) => {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);

  return evenNumbers;
};

const sumArray = (number) => {
  return number.reduce((total, num) => total + num, 0);
};
const findDuplicates = (arr) => {
  const seen = {};
  const duplicates = [];

  for (const num of arr) {
    if (seen[num]) {
      duplicates.push(num);
    } else {
      seen[num] = true;
    }
  }

  return duplicates;
};
const sortArray = (arr) => {
  return arr.slice().sort((a, b) => a - b);
};
const concatenateArrays = (arr1, arr2) => {
  return arr1.concat(arr2);
};
const calculateAverage = (arr) => {
  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
};
const allPositive = (arr) => {
  return arr.every((num) => num > 0);
};
const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
const findIndexOf = (arr, target) => {
  return arr.indexOf(target);
};

module.exports = {
  getLargestNumber,
  filterEvenNumber,
  sumArray,
  findDuplicates,
  sortArray,
  concatenateArrays,
  calculateAverage,
  allPositive,
  removeDuplicates,
  findIndexOf,
};
