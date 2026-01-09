function findEvenNumbers(arr) {
  let evennmbr = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evennmbr.push(num);
    }
  }
  return evennmbr;
}
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));
