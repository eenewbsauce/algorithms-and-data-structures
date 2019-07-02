function binarySearch(key, arr) {
  let min = 0;
  let max = arr.length - 1;
  let iterations = 0;

  while (min <= max) {
    iterations++;

    if (arr[min] === key) {
      return [min, iterations];
    } else if (arr[max] === key) {
      return [max, iterations];
    }

    min += 1;
    max -= 1;
  }

  return [-1, iterations];
}

const [indexForKey, interations] = binarySearch("l", [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g"
]);
console.log(indexForKey);
console.log(interations);
