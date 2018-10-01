// Hello world!
const twoSum = (arr, sum) => {
  let resultIndices = [];
  if (!arr.length) return [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        resultIndices.push(i, j);
      }
    }
  }

  return resultIndices;
};

module.exports = twoSum;
