module.exports = function repeater(str, options) {
  str = String(str);
  let stringResult = [];

  if (options.separator === undefined) options.separator = "+";
  if (options.addition === undefined) options.addition = "";
  if (options.additionSeparator === undefined) options.additionSeparator = "|";
  if (options.additionRepeatTimes === undefined)
    options.additionRepeatTimes = 0;

  if (options.repeatTimes == undefined) {
    stringResult.push(str);
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      stringResult.push(options.addition);

      if (j < options.additionRepeatTimes - 1) {
        stringResult.push(options.additionSeparator);
      }
    }
    stringResult.push(options.addition);
    return stringResult.join("");
  }

  options.separator = String(options.separator);
  options.addition = String(options.addition);
  options.additionSeparator = String(options.additionSeparator);

  for (let i = 0; i < options.repeatTimes; i++) {
    stringResult.push(str);

    for (let j = 0; j < options.additionRepeatTimes; j++) {
      stringResult.push(options.addition);

      if (j < options.additionRepeatTimes - 1) {
        stringResult.push(options.additionSeparator);
      }
    }

    if (i < options.repeatTimes - 1) {
      stringResult.push(options.separator);
    }
  }
  return stringResult.join("");
};
