module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("Error");
  if (arr.length == 0) return [];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--discard-next") {
      i++;
    } else if (arr[i] == "--discard-prev") {
      newArr.pop();
    } else if (arr[i] == "--double-next") {
      if (i + 1 < arr.length) {
        newArr.push(arr[i + 1]);
      }
    } else if (arr[i] == "--double-prev") {
      if (i != 0) {
        newArr.push(arr[i - 1]);
      }
    } else if (
      arr[i] != "--discard-prev" &&
      arr[i] != "--double-prev" &&
      arr[i] != "--double-next" &&
      arr[i] != "--discard-next"
    ) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
