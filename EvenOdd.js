function calculate(arr) {
  let sumOdd = 0;
  let sumEven = 0;
  let oddCount = 0;
  let evenCount = 0;
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      sumEven += arr[i];
      evenCount++;
    } else {
      sumOdd += arr[i];
      oddCount++;
    }
    total += arr[i];
  }

  const difference = sumOdd - sumEven;
  const average = total / arr.length;
  const gcd = findGCD(sumOdd, sumEven);

  console.log(`Difference = ${difference}`);
  console.log(`Odd Elements = ${oddCount}`);
  console.log(`Even Elements = ${evenCount}`);
  console.log(`Average = ${average}`);
  console.log(`GCD = ${gcd}`);
}

function findGCD(a, b) {
  if (b === 0) return a;
  return findGCD(b, a % b);
}

const input = [1, 2, 3, 4, 5];
calculate(input);
