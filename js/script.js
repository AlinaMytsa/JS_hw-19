'use strict';

const arr = [1, 2, 3, -1, -2, -3];

const getPositiveNumbers = (array = arr) => {
  if (!Array.isArray(array)) return [];
  if (!array.length) return 'array is empty';

  const positiveNumbersArray = [];

  for (let i = 0; i < array.length; i += 1){

    if (array[i] > 0) {
      positiveNumbersArray.push(array[i]);
    }

  }
  return positiveNumbersArray.length > 0 ? positiveNumbersArray : null;
};

getPositiveNumbers(arr);

const positiveNumbersArray = getPositiveNumbers();
console.log(positiveNumbersArray);
