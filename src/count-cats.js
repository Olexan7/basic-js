module.exports = function countCats(matrix) {
  var number = 0;
  matrix.forEach(function(rowValue) {
    rowValue.forEach(function(elementValue) {
      if (elementValue == "^^") {
        number++;
      }
    });
  });
  return number;
};
