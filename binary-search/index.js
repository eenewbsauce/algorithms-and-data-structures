function binarySearch(key, arr) {
  let low = 0;
  let high = arr.length - 1;
  let iterations = 0;

  while (low <= high) {
    iterations++;
    let mid = Math.floor((low + high) / 2);
    let value = arr[mid];

    if (value < key) {
      low = mid + 1;
    } else if (value > key) {
      high = mid - 1;
    } else {
      return [mid, iterations];
    }
  }

  return [-1, iterations];
}

const [indexForKey, interations] = binarySearch("b", [
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
