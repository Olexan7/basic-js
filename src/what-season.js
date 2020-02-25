module.exports = function getSeason(date) {
  let month = date.getMonth();
  console.log(month);
  if (month == 0 || month == 1 || month == 11) return "winter";
  else if (month == 2 || month == 3 || month == 4) return "spring";
  else if (moth == 5 || month == 6 || month == 7) return "summer";
  else if (month == 8 || month == 9 || month == 10) return "autumn";
  else throw new Error("Error");
};
