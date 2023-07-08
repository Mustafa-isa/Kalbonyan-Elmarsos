function sumUp(numbers) {
  let sum = 0; // 1

  for (let i = 0; i < numbers.length; i++) { // n
    sum += numbers[i];
  }

  return sum; // 1
}

// Linear Time Complexity => O(n)

const array = [1, 2, 5];

console.log(sumUp(array)); // 8